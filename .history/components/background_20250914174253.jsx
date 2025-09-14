import Particles from './background/Particles';
export default function background() {

    return(
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden">
        <Particles
            particleColors={['#673AB7', '#2196F3', '#241440', '#ffffff', '#cccccc']}
            particleCount={400}
            particleSpread={5}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
        />
    </div>);
}
