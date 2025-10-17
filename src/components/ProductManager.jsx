import  { useState } from "react";
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
            <div className="ajouter-product">
                <h2 >Add a new product</h2>
                <div className="product-form">
                    <label>Image:</label>
                    <input onChange={(e) => setValues({ ...values, image: e.target.files[0] })} type="file" accept="image/*"/>
                    <label>Name:</label>
                    <input onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" placeholder="Product Name" />
                    <label>Description:</label>
                    <input onChange={(e) => setValues({ ...values, description: e.target.value })} type="text" placeholder="Product Description" />
                    <label>Price:</label>
                    <input onChange={(e) => setValues({ ...values, price: e.target.value })} type="number" placeholder="Product Price" />
                </div>
                <button className="buttonadd" onClick={() => addProduct(values)}>Add</button>

            </div>


        </>
    );


}

export default ProductItem;

