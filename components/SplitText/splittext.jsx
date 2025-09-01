import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
                       text,
                       className = '',
                       delay = 100,
                       duration = 0.6,
                       ease = 'power3.out',
                       splitType = 'chars',
                       from = { opacity: 0, y: 40 },
                       to = { opacity: 1, y: 0 },
                       threshold = 0.1,
                       rootMargin = '-100px',
                       textAlign = 'left',
                       tag = 'p',
                       gradient = false,
                       gradientColors = ["#4F46E5", "#EC4899"],
                       onLetterAnimationComplete,
                       replayOnEnter = true,
                   }) => {
    const ref = useRef(null);
    const animationCompletedRef = useRef(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const splitInstanceRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (document.fonts.status === 'loaded') {
            setFontsLoaded(true);
        } else {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        }
    }, []);

    // Reset animation when component comes into view
    useEffect(() => {
        if (isInView && replayOnEnter && ref.current) {
            resetAndAnimate();
        }
    }, [isInView, replayOnEnter]);

    const resetAndAnimate = () => {
        if (!ref.current) return;

        const el = ref.current;

        // Revert any existing split instance
        if (splitInstanceRef.current) {
            try {
                splitInstanceRef.current.revert();
            } catch (e) {
                console.log("Error reverting split instance:", e);
            }
            splitInstanceRef.current = null;
        }

        // Kill any existing animation
        if (animationRef.current) {
            animationRef.current.kill();
            animationRef.current = null;
        }

        // Create new split instance
        const splitInstance = new GSAPSplitText(el, {
            type: splitType,
            smartWrap: true,
            autoSplit: splitType === 'lines',
            linesClass: 'split-line',
            wordsClass: 'split-word',
            charsClass: 'split-char',
            reduceWhiteSpace: false,
        });

        splitInstanceRef.current = splitInstance;

        let targets;
        if (splitType.includes('chars') && splitInstance.chars.length) targets = splitInstance.chars;
        if (!targets && splitType.includes('words') && splitInstance.words.length) targets = splitInstance.words;
        if (!targets && splitType.includes('lines') && splitInstance.lines.length) targets = splitInstance.lines;
        if (!targets) targets = splitInstance.chars || splitInstance.words || splitInstance.lines;

        // Apply gradient if enabled
        if (gradient && targets) {
            const totalChars = targets.length;
            targets.forEach((char, index) => {
                const position = index / (totalChars - 1);
                const color = interpolateColor(
                    gradientColors[0],
                    gradientColors[1],
                    position
                );
                gsap.set(char, {
                    color: color,
                    willChange: 'color'
                });
            });
        }

        // Set initial state
        gsap.set(targets, { ...from });

        // Create animation
        animationRef.current = gsap.to(targets, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
            },
            willChange: 'transform, opacity, color',
            force3D: true
        });
    };

    useGSAP(
        () => {
            if (!ref.current || !text || !fontsLoaded) return;

            const el = ref.current;
            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
            const sign =
                marginValue === 0
                    ? ''
                    : marginValue < 0
                        ? `-=${Math.abs(marginValue)}${marginUnit}`
                        : `+=${marginValue}${marginUnit}`;
            const start = `top ${startPct}%${sign}`;

            // Create ScrollTrigger to detect when element is in view
            const scrollTrigger = ScrollTrigger.create({
                trigger: el,
                start,
                onEnter: () => setIsInView(true),
                onEnterBack: () => setIsInView(true),
                onLeave: () => setIsInView(false),
                onLeaveBack: () => setIsInView(false),
            });

            // Initial animation
            resetAndAnimate();

            return () => {
                // Cleanup
                if (scrollTrigger) scrollTrigger.kill();
                if (splitInstanceRef.current) {
                    try {
                        splitInstanceRef.current.revert();
                    } catch (e) {
                        console.log("Error during cleanup:", e);
                    }
                }
                if (animationRef.current) animationRef.current.kill();
            };
        },
        {
            dependencies: [
                text,
                delay,
                duration,
                ease,
                splitType,
                JSON.stringify(from),
                JSON.stringify(to),
                threshold,
                rootMargin,
                fontsLoaded,
            ],
            scope: ref
        }
    );

    // Helper function to interpolate between two colors
    const interpolateColor = (color1, color2, factor) => {
        const hex = color => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };

        const rgb1 = hex(color1);
        const rgb2 = hex(color2);

        if (!rgb1 || !rgb2) return color1;

        const result = {
            r: Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor),
            g: Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor),
            b: Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor)
        };

        return `rgb(${result.r}, ${result.g}, ${result.b})`;
    };

    const renderTag = () => {
        const style = {
            textAlign,
            wordWrap: 'break-word',
        };

        const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;

        switch (tag) {
            case 'h1':
                return (
                    <h1 ref={ref} style={style} className={classes}>
                        {text}
                    </h1>
                );
            case 'h2':
                return (
                    <h2 ref={ref} style={style} className={classes}>
                        {text}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 ref={ref} style={style} className={classes}>
                        {text}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 ref={ref} style={style} className={classes}>
                        {text}
                    </h4>
                );
            case 'h5':
                return (
                    <h5 ref={ref} style={style} className={classes}>
                        {text}
                    </h5>
                );
            case 'h6':
                return (
                    <h6 ref={ref} style={style} className={classes}>
                        {text}
                    </h6>
                );
            default:
                return (
                    <p ref={ref} style={style} className={classes}>
                        {text}
                    </p>
                );
        }
    };

    return renderTag();
};

export default SplitText;