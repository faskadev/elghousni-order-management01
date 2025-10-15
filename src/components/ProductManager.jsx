import React, { useState } from "react";
import useProductStore from "./productStore";

function ProductItem({ item, onEdit, onRemove }) {
  return (
    <li>
      {item.name} - {item.price}€
      <button onClick={() => onEdit(item.id)}>Modifier</button>
      <button onClick={() => onRemove(item.id)}>Supprimer</button>
    </li>
  );
}

export default function ProductManager() {
  const { items, addProduct, removeProduct, editProduct } = useProductStore();
  
  return (
    <ul>
      {items.map(item => (
        <ProductItem
          key={item.id}
          item={item}
          onEdit={editProduct}
          onRemove={removeProduct}
        />
      ))}
    </ul>
  );
}

