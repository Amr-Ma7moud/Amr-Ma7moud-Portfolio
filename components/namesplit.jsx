import SplitText from "./SplitText/splittext";

export default function SplitName() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <SplitText
            text="Hi, I'm Amr Mahmoud"
            className="hero-text"
            delay={200}
            duration={0.6}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{opacity: 0, y: 40}}
            to={{opacity: 1, y: 0}}
            threshold={0.1}
            rootMargin="-100px"
            textAlign=""
            onLetterAnimationComplete={handleAnimationComplete}
            gradient={true}
            gradientColors={["#673AB7", "#2196F3"]}
            replayOnEnter={true} // Add this to enable re-animation
        />
    );
}