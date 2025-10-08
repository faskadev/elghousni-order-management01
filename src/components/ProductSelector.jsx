import { products } from "../data/produits";
import { useState } from "react";

function ProductSelector() {

    return (
        <div className="product-selector">
            <h2>Products List</h2>
            <div className="products-holder">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">Price: {product.price} MAD</p>
                        <label className="quantity-label" htmlFor={`quantity-${product.id}`}>Quantity:</label>
                        <input  type="number" id={`quantity-${product.id}`} min="0" defaultValue="0" />
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductSelector;
