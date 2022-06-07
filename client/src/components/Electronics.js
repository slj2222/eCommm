// import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function Electronics({ allItems }) {
  
    const mapElectronics = allItems.filter(item => item.category === "electronics").map(electronicsItem => {
        return (
            <ItemCard key={electronicsItem.id} item={electronicsItem} />
        )
    })

    return (
        <div className="outer-item-container">
            {mapElectronics}
        </div>
    )
}