import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState((false))
  const [msg, setMsg] = useState('add')
  const [inner, setInner] = useState('Add to Cart')

  const handleAddCart = (e) => {
    setCart(true)
  }

  const handleMsg = (e) => {
    setMsg('remove')
    setInner('Remove from Cart')
  }

  const itemClass = cart ? "in-cart" : ""
  

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>

      <button className={msg}
              onClick={(e)=>(
                handleAddCart(),
                handleMsg()
              )}
      >{inner}</button>
    </li>
  );
}

export default Item;
