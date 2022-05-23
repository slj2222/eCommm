import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function WomensClothing() {
    const [womensClothing, setWomensClothing] = useState([])
    
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
          .then(response => response.json())
          .then(data => setWomensClothing(data.filter(item => item.category === "women's clothing")))
    },[])
    

    const mapWomensClothing = womensClothing.map(womensClothingItem => {
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