import React from "react";

export default function ItemCard({ item }) {
    console.log(item)

    return (
        <div className="item-container">
            <div className="inner-item-container"> 
                <img className="item-image" src={item.image} alt={item.description} />
            </div>
            <div className="inner-item-container">
                <h4>{item.title.substring(0, 24)}...</h4>
            </div>
            <div className="inner-item-container">
                <h3>$ {item.price}</h3>
            </div>
            <div className="inner-item-container">
                <p>average review: {item.rating.rate} </p>
                <p>total reviews: {item.rating.count}</p>
            </div>
        </div>
    )
}