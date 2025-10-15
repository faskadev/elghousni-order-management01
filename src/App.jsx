import { useState } from "react";
import "./App.css";
import Sidbar from "./components/Sidbar";
import ProductSelector from "./components/ProductSelector";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [orders, setOrders] = useState([]); // ⬅️ هنا نخزن الطلبات

  const handleAddOrder = (productid, quantity) => {
    setOrders((prev) => {
      // إذا المنتج موجود من قبل، نحدّث الكمية
      const existing = prev.find((o) => o.productid === productid);
      if (existing) {
        return prev.map((o) =>
          o.productid === productid
            ? { ...o, quantity: o.quantity + quantity }
            : o
        );
      }
      // إذا جديد، نضيفو
      return [...prev, { productid, quantity }];
    });
  };

  return (
    <>
      <div className="title">
        <Navbar />
      </div>
      <Sidbar />
      <ProductSelector onAddOrder={handleAddOrder} />
      <OrderSummary orders={orders} />
    </>
  );
}

export default App;