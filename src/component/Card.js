import Star from "../images/star.png"

function Card(props) {
    return(
        <div className="card">
            {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
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
