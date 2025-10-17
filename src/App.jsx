import { useState } from "react";
import "./App.css";
import Sidbar from "./components/Sidbar";
import ProductSelector from "./components/ProductSelector";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import ProductItem from "./components/ProductManager";
import useProductStore from "./store/productStore";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";


function App() {
  const [orders, setOrders] = useState([]); // ⬅️ هنا نخزن الطلبات


  return (
    
      <Router>
        
        <Navbar />
        
        <Sidbar />

        <Routes>
          <Route path="/add-product" element={<ProductItem />} />
          <Route path="/product-list" element={<ProductSelector />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      

      <OrderSummary orders={orders} />
      </Router>
      
    
  );
}

export default App;