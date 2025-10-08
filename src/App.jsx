import { useState } from 'react'
import './App.css'
import Sidbar  from './components/Sidbar'
import ProductSelector from  './components/ProductSelector'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title">
        <h1>Coopérative Elghousni</h1>
        <p>application de gestion des commandes</p>

      </div>
      <Sidbar />
      <ProductSelector />
    </>
  )
}

export default App
