import Star from "../images/star.png"

function Card(props) {

    let badgeText

    if(props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.data.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={props.data.coverImg} alt="person" />
            <div className="card-stats">
                <img src={Star} alt="star" className="card-star"/>
                <span>{props.data.stats.rating}</span>
                <span>({props.data.stats.reviewCount}). </span>  
                <span> {props.data.location}</span>
            </div>
            <p className="card-title">{props.data.title}</p>
            <p className="card-cost">
                <span className="card-price">From ${props.data.price}</span> 
                / person
            </p>
        </div>        
    )
}

export default Card 
