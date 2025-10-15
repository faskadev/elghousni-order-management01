// src/components/ProductSelector.jsx
import { products } from "../data/produits";
import { useState } from "react";

function ProductSelector({ onAddOrder }) {
    const [quantities, setQuantities] = useState({});


    const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddToOrder = (id) => {
    const quantity = quantities[id] || 0;
    if (quantity > 0) {
      onAddOrder(id, quantity);
    } else {
      alert("Veuillez entrer une quantité valide.");
    }
  };

  return (
    <div className="product-selector">
      <h2>Products List</h2>
      <div className="products-holder">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: {product.price} MAD</p>

            <label
              className="quantity-label"
              htmlFor={`quantity-${product.id}`}
            >
              Quantity:
            </label>
            <input
              type="number"
              id={`quantity-${product.id}`}
              min="0"
              value={quantities[product.id] || 0}
              onChange={(e) =>
                handleQuantityChange(product.id, Number(e.target.value))
              }
            />

            <button onClick={() => handleAddToOrder(product.id)}>
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSelector;