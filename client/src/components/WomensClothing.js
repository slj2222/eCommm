// import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function WomensClothing({ allItems }) {
  
    const mapWomensClothing = allItems.filter(item => item.category === "women's clothing").map(womensClothingItem => {
        return (
            <ItemCard key={womensClothingItem.id} item={womensClothingItem} />
        )
    })
    return (
        <div className="outer-item-container">
            {mapWomensClothing}
        </div>
    )
}