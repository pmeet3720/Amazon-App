import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  // const removeFromBasket = () => {
  //   // Dispatch the action to remove the item from the basket
  //   dispatch({
  //     type: "REMOVE_FROM_BASKET",
  //     id: id,
  //   });
  // };
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
