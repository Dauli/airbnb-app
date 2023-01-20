import HeroImage from "../images/photo-grid.png"
function Hero() {
    return(
        <div className="hero">
            <img className="hero-image" src={ HeroImage } alt="hero-pic"/>
        </div>
    )
}

export default Hero
