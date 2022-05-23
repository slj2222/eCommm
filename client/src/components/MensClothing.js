import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function MensClothing({ allItems }) {
    
    const [mensClothing, setMensClothing] = useState([])
    
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
          .then(response => response.json())
          .then(data => setMensClothing(data.filter(item => item.category === "men's clothing")))
    },[])
    

    const mapMensClothing = mensClothing.map(mensClothingItem => {
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