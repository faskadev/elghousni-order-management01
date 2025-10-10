import { useState } from 'react'
import './App.css'
import Sidbar from './components/Sidbar'
import ProductSelector from './components/ProductSelector'
import Navbar from './components/navbar'
import OrderSummary from './components/OrderSummary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title">
        <Navbar />
      </div>
      <Sidbar />
      <ProductSelector />
      <OrderSummary quantity={2} productid={1} />
      

    </>
  )
}

export default App
