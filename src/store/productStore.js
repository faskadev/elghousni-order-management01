import React, { useState } from "react";
import useProductStore from "./productStore"; // استيراد الـ store

export default function ProductManager() {
  const { items, addProduct, removeProduct, editProduct } = useProductStore();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) return;
    addProduct({ id: Date.now(), name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  const handleEdit = (id) => {
    const product = items.find((item) => item.id === id);
    if (!product) return;
    editProduct(id, { ...product, name: product.name + " ✅" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Produits</h2>
      <input
        type="text"
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Ajouter</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}€
            <button onClick={() => handleEdit(item.id)}>Modifier</button>
            <button onClick={() => removeProduct(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
