import React from "react";
import ItemCard from "./ItemCard";

export default function HomePage({ allItems }) {

    const mapAllItems = allItems.map(item => {
        return (
            <ItemCard item={item}/>
        )
    })
    return (
        <div className="outer-item-container"> 
            {mapAllItems}
        </div>
    )
}