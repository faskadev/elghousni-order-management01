import React, { useState } from "react";
import useProductStore from "../store/productStore";

function ProductItem() {
    const { addProduct } = useProductStore();
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        id: Math.floor(Math.random() * 10000) 
    });

    return (
        <>
            <h2>Ajouter un nouveau produit</h2>
            <div className="product-form">
                <label>Nom:</label>
                <input onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" placeholder="Nom du produit" />
                <label>Description:</label>
                <input onChange={(e) => setValues({ ...values, description: e.target.value })} type="text" placeholder="Description du produit" />
                <label>Prix:</label>
                <input onChange={(e) => setValues({ ...values, price: e.target.value })} type="number" placeholder="Prix du produit" />
            </div>
            <button onClick={() => addProduct(values)}>Ajouter</button>


        </>
    );


}

export default ProductItem;

