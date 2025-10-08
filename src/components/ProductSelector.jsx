import { products } from "../data/produits";
import { useState } from "react";
function ProductSelector() {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className="product-selector">
            <h2>Products List</h2>
            <div className="products-holder">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">Price: {product.price} MAD</p>

                       {quantity === 0 ? (<button onClick={() => setQuantity(quantity - 1)}>decrement</button>) : null}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default ProductSelector;