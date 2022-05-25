import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ItemCard({ item }) {
    const { id } = useParams()

    return (
        <div className="item-container">
            <Link to={`/products/${id}`}>
                <div className="inner-item-container">
                    <img className="item-image" src={item.image} alt={item.description} />
                </div>
                <div className="inner-item-container">
                    <h4>{item.title.substring(0, 24)}...</h4>
                </div>
            </Link>
            <div className="inner-item-container">
                <h3>$ {item.price}</h3>
            </div>
            <div className="inner-item-container">
                <p>{item.rating.rate} / 5 </p>
                <p>{item.rating.count} total reviews</p>
            </div>
        </div>
    )
}