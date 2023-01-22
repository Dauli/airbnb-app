import Person from "../images/katie-zaferes.png"
import Star from "../images/star.png"

function Card() {
    return(
        <div className="card-container">
            <section className="card1">
                <img className="person-image" src={Person} alt="person" />
                <p className="star">
                    <img src={Star} alt="star" className="star-pic"/>
                    <span>5.0 (6) USA</span>
                </p>
                <p className="title">Life lessons with Kent</p>
                <p className="cost">
                    <span className="span-price">From R500</span> / person
                </p>
            </section>

            <section className="card2">
                <img className="person-image" src={Person} alt="person" />
                <p className="star">
                    <img src={Star} alt="star" className="star-pic"/>
                    <span>5.0 (6) USA</span>
                </p>
                <p className="title">Life lessons with Kent</p>
                <p className="cost">
                    <span className="span-price">From R500</span> / person
                </p>
            </section>

            <section className="card3">
                <img className="person-image" src={Person} alt="person" />
                <p className="star">
                    <img src={Star} alt="star" className="star-pic"/>
                    <span>5.0 (6) USA</span>
                </p>
                <p className="title">Life lessons with Kent</p>
                <p className="cost">
                    <span className="span-price">From R500</span> / person
                </p>
            </section>
        </div>
        
    )
}

export default Card 
