// import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function Jewelery({ allItems } ) {
   

    const mapJewelery = allItems.filter(item => item.category === "jewelery").map(jeweleryItem => {
        return (
            <ItemCard key={jeweleryItem.id} item={jeweleryItem} />
        )
    })
    return (
        <div className="outer-item-container">
            {mapJewelery}
        </div>
    )
}