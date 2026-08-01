import { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () =>{



    const[listOFRestaurant, setListOFRestaurant] = useState([]);
    const[filterRestaurant, setFilterRestaurant] = useState([]);

    const[searchTxt, setSearchTxt] = useState([''])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch('https://namastedev.com/api/v1/listRestaurants');
        const json = await data.json();
        // console.log(json);
        setListOFRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOFRestaurant.length == 0 ? <Shimmer /> : (
        <main className="main-container">
            <section className="restaurants">
                <div className="container">
                    <div className="item-bar">
                        <div className="number">1066 restaurants</div>
                        <div className="filters">
                            <div className="all" onClick={()=>{
                                // console.log(listOFRestaurant)
                                setFilterRestaurant(listOFRestaurant);
                            }}>All</div>
                            <div className="delivery" onClick={ ()=>{
                                let filterDeliveryTime = listOFRestaurant.filter( (res)=>(res.info.sla.deliveryTime < 30))
                                setFilterRestaurant(filterDeliveryTime);
                            }} >Delivery Time</div>
                            <div className="rating" onClick={()=>{
                                let filterRatingData = listOFRestaurant.filter( (res)=> res.info.avgRating > 4.5 )
                                
                                setFilterRestaurant(filterRatingData);
                            }}>
                                Rating
                            </div>
                            <div className="cost-lh">Cost: Low to High</div>
                            <div className="cost-hl">Cost: High to Low</div>
                        </div>
                    </div>
                    <div className="search-box-wrapper">
                        <div className="d-flex">
                            <input placeholder="Search" value={searchTxt} className="input-wrapper" onChange={(e)=>{
                                setSearchTxt(e.target.value)
                            }
                                } />
                            <button className="btn" onClick={()=>{
                                // console.log(searchTxt)
                                const searchFilter = listOFRestaurant.filter((res)=>
                                        res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                                );
                            setFilterRestaurant(searchFilter);
                            }}>Search</button>
                        </div>
                    </div>
                    <div className="restaurant-list">
                        
                        {
                            filterRestaurant.map( (restaurant)=>( <Restaurant key={restaurant.info.id} resData = {restaurant} />) )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Body;