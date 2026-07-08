import { useState } from "react";
import Restaurant from "./Restaurant";
import resList from "../../utils/mockdata";

const Body = () =>{
    
    
    const [listOFRestaurant, setListOFRestaurant] = useState(resList);


    return(
        <main className="main-container">
            <section className="restaurants">
                <div className="container">
                    <div className="item-bar">
                        <div className="number">1066 restaurants</div>
                        <div className="filters">
                            <div className="all" onClick={()=>{
                                setListOFRestaurant(resList);
                            }}>All</div>
                            <div className="delivery" onClick={ ()=>{
                                let filterDeliveryTime = resList.filter( (res)=>(res.info.sla.deliveryTime < 30))
                                setListOFRestaurant(filterDeliveryTime);
                            }} >Delivery Time</div>
                            <div className="rating" onClick={()=>{
                                let filterRatingData = resList.filter( (res)=> res.info.avgRating > 4.5 )
                                // console.log(filterRatingData);
                                setListOFRestaurant(filterRatingData);
                            }}>
                                Rating
                            </div>
                            <div className="cost-lh">Cost: Low to High</div>
                            <div className="cost-hl">Cost: High to Low</div>
                        </div>
                    </div>
                    <div className="restaurant-list">
                        {
                            listOFRestaurant.map( (restaurant)=>( <Restaurant key={restaurant.info.id} resData = {restaurant} />) )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Body;