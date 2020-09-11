import React from 'react';
import "./product.scss";

const Products =()=>{

        let productData = [{ name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }]
        return (
            <div className="slider">
           { productData.map((listValue, index) => {
                return (                   
                        <div className="block-20" key={index}>
                            <div className="product-image m-20">
                            </div>
                            <label>{listValue.name}</label>
                            <br/>
                            <p className="text-orange">{listValue.price}</p>
                        </div>
                   
                );
            })}
            </div>
        )
    }



export default Products;
