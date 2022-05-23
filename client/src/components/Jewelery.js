import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function Jewelery() {
    const [jewelery, setJewelery] = useState([])
    
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
          .then(response => response.json())
          .then(data => setJewelery(data.filter(item => item.category === "jewelery")))
    },[])
    

    const mapJewelery = jewelery.map(jeweleryItem => {
        return (
            <ItemCard key={jeweleryItem.id} item={jeweleryItem} />
        )
    })
    return (
        <div>
            {mapJewelery}
        </div>
    )
}