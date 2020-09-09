import React, { Component } from 'react';
import "./product.scss";

class Products extends Component {

    render() {
        let productData = [{ name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }, { name: "Printed Polo T-Shirt", price: "1499" }]
        return (
            <div className="slider">
           { productData.map((listValue, index) => {
                return (                   
                        <div className="block-20" key={index}>
                            <div className="Product-image">
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

}

export default Products;
