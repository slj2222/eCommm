import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailItemCard() {
    const { id } = useParams()
    const [detailItem, setDetailItem] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => setDetailItem(data))
      }, [id])

      function handleClick(item) {
        console.log(item)
        fetch("/cart_items", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart_id: 1,
                key: item.id,
                price: item.price,
                title: item.title,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

      console.log(detailItem)
    return (
        <div className="outer-item-container">
            <div className="item-container">
                <div className="inner-item-container">
                    <img className="item-image" src={detailItem.image} alt={detailItem.description} />
                </div>
                <div className="innter-item-container">
                    <h4>{detailItem.title}</h4>
                </div>
                <div className="inner-item-container">
                    <h3>$ {detailItem.price}</h3>
                </div>
                <div className="inner-item-container">
                    <p>{detailItem.description}</p>
                </div>
                {/* <div>
                    <p>{detailItem.rating.rate} / 5</p>
                    <p>{detailItem.rating.count} total reviews</p>
                </div> */}
                <div className="inner-item-container">
                <button onClick={() => handleClick(detailItem)}>Add to cart</button>
            </div>
            </div>
        </div>
    )
}