import Particles from './background/Particles';
export default function background() {

    return(
    <div >
        <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
        />
    </div>);
}
