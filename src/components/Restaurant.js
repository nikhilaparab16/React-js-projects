import { CDN_URL } from "../../utils/constant";

const Restaurant = (props)=>{
    const {resData} = props;
    const {name,cuisines,costForTwo,sla,avgRating,cloudinaryImageId,aggregatedDiscountInfoV3} = resData?.info;
    return (
        <div className="place">
            <div className="place-link">
                <div className="list-item">
                    <div className="item-content">
                        <div className="top-img">
                            <img className="_2tuBw _12_oN" alt="La Pino'z Pizza"
                                src= {CDN_URL + cloudinaryImageId} style={{width:"254px",height:"160px"}} />
                        </div>
                        <div className="status" style={{background: "#3a3c41",color:"#fff",borderColor:"#1e2023"}}>
                            <div className="status-title">Promoted</div>
                        </div>
                        <div className="place-name-div">
                            <div className="name">{name}</div>
                            <div className="food-items"
                                title="Italian, Pizzas, Fast Food, Mexican, Desserts, Beverages">
                                    {cuisines.join(" , ")}
                            </div>
                        </div>
                        <div className="info-div">
                            <div className="rating">
                                <span className="icon-star"><i className="fa-solid fa-star"></i></span>
                                <span>{avgRating}</span>
                            </div>
                            <div>•</div>
                            <div>{sla.deliveryTime} MINS</div>
                            <div>•</div>
                            <div className="price">{costForTwo}</div>
                        </div>
                        <div className="offer-div">
                            <span className="icon-offer-filled"><i className="fa-solid fa-tag"></i></span>
                            <span className="offer-text">{aggregatedDiscountInfoV3.header} | Use WELCOME50</span>
                        </div>
                    </div>
                    <div className="quick-view">
                        <span role="button" aria-label="Open" className="view-btn">QUICK VIEW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;