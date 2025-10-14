import { products } from "../data/produits";
import ProductSelector from "./ProductSelector";


function OrderSummary({ quantity, productid }) {
  const product = products.find((p) => p.id === Number(productid));

  if (!product) {
    return <p>Produit introuvable.</p>;
  }
  const total = product.price * quantity;

  return (
    <>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div>
          {products.map(product => (
            <div key={product.id}>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price.toFixed(2)} MAD</p>
              <p className="product-quantity">Quantity: {quantity}</p>
              <p className="total-price">Total: {total.toFixed(2)} MAD</p>
            </div>
          ))}
        </div>
      </div>
      <ProductSelector />
    </>
  )
}

export default OrderSummary;