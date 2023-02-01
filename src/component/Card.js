import Star from "../images/star.png"

function Card(props) {

    let badgeText

    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.country === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={props.img} alt="person" />
            <div className="card-stats">
                <img src={Star} alt="star" className="card-star"/>
                <span>{props.ratingScore}</span>
                <span>({props.ratingCount}). </span>  
                <span> {props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-cost">
                <span className="card-price">From {props.price}</span> 
                / person
            </p>
        </div>        
    )
}

export default Card 
