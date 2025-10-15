import { useState } from "react";
import "./App.css";
import Sidbar from "./components/Sidbar";
import ProductSelector from "./components/ProductSelector";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import ProductItem from "./components/ProductManager";
import useProductStore from "./store/productStore";



function App() {
  const [orders, setOrders] = useState([]); // ⬅️ هنا نخزن الطلبات


  return (
    <>
      
        <Navbar />
        <Sidbar />

      <ProductSelector/>
      <ProductItem />

      <OrderSummary orders={orders} />
      
    </>
  );
}

export default App;