import HeroImage from "../images/photo-grid.png"
function Hero() {
    return(
        <section className="hero">
            <img className="hero-image" src={ HeroImage } alt="hero-pic"/>
        </section>
    )
}

export default Hero
