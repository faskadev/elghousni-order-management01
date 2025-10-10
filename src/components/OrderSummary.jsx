import { products } from "../data/produits";
import {ProductSelector} from "./ProductSelector"

function OrderSummary({ quantity, productid }) {
  const product = products.find((p) => p.id === productid);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const total = product.price * quantity;

  return (
    <>
      <h2>Order Summary</h2>

      <div>
        <ProductSelector/>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price.toFixed(2)} MAD</p>
        <p className="product-quantity">Quantity: {quantity}</p>
        <p className="total-price">Total: {total.toFixed(2)} MAD</p>
        
      </div>
    </>
  )
}

export default OrderSummary;