import Star from "../images/star.png"

function Card(props) {
    return(
        <section className="card-container">
            <img className="person-image" src={props.img} alt="person" />
            <p className="star">
                <img src={Star} alt="star" className="star-pic"/>
                <span>{props.ratingScore} (6) USA</span>
            </p>
            <p className="title">{props.title}</p>
            <p className="cost">
                <span className="span-price">From {props.price}</span> / person
            </p>
        </section>        
    )
}

export default Card 
