import React from 'react';
import "./product.scss";

const Products =()=>{

        let productData = [{ image: "collection1",name: "Printed Polo T-Shirt", price: "1499" }, { image: "collection2",name: "Printed Polo T-Shirt", price: "1499" }, {image: "collection1", name: "Printed Polo T-Shirt", price: "1499" }, { image: "collection2",name: "Printed Polo T-Shirt", price: "1499" }, { image: "collection1", name: "Printed Polo T-Shirt", price: "1499" }]
        return (
            <div className="slider">
           { productData.map((listValue, index) => {
                return (                   
                        <div className="block-20" key={index}>
                           {listValue.image==="collection1"?
                            <div className="product-image m-20">
                            </div>:
                            <div className="product-image-1 m-20">
                            </div>}
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
