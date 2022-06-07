// import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function MensClothing({ allItems }) {
    
    const mapMensClothing = allItems.filter(item => item.category === "men's clothing").map(mensClothingItem => {
        return (
            <ItemCard key={mensClothingItem.id} item={mensClothingItem} />
        )
    })

    return (
        <div className="outer-item-container">
            {mapMensClothing}
        </div>
    )
}