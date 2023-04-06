import "styles/Hero.scss";
import wave from "assets/waving-hand.png";
import Bullets from "components/NavigationBullets";

const Hero = () => {

    return (
        <div className="card">
            <Bullets />
            <h1><span className="accent-1">Hi there!</span><img className="wave" src={ wave } alt="wave emoji" /></h1>
            <h2>I’m <span className="accent-2">Brandon Britton</span></h2>
            <h3>full-stack software developer</h3>
            <p>
                I’m a software engineer specializing in building
                (and occasionally designing) exceptional digital experiences. Currently,
                I’m focused on building accessible, human-centered products.
            </p>     
        </div>
    );
};

export default Hero;