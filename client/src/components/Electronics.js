import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function Electronics() {
        
    const [electronics, setElectronics] = useState([])
    
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
          .then(response => response.json())
          .then(data => setElectronics(data.filter(item => item.category === "electronics")))
    },[])
    

    const mapElectronics = electronics.map(electronicsItem => {
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