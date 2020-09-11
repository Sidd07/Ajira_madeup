import React from 'react';
import './orders.scss'

const Orders = (props) => {
    let productData = props.data
    console.log("im product Data", productData)
    return (
        <div className="border-all mb-20 mr-10 p-20 sm-p-0">
            <h2 className="width-100 text-left pl-10"> My Orders</h2>
            {productData.map((value, index) => {
                return (
                <div className="row p-20 sm-p-0 m-10" key={index}>
                    <div className="block-20 sm-block-20">
                        <div className="order-image"></div>
                    </div>
                    <div className="block-50 sm-block-50">
                        <div className="float-left">
                            <label className="float-left sm-font-10"> Order {value.orderId} </label>
                            <br />
                            <h3 className="text-left sm-font-12 sm-p-0 sm-m-0">{value.pname}</h3>
                            <label className="float-left sm-font-10"> Express Delivery by {value.dDate}</label>
                        </div>
                    </div>

                    <div className="block-20 sm-font-20 sm-block-20 ml-10pt sm-m-0">
                        <label className="float-left sm-font-10">{value.pType}</label>
                        <br />
                        <h3 className="text-right sm-font-10">RS {value.price}</h3>
                        <div className="order-status float-right sm-font-10">{value.oderStatus}</div>
                    </div>
                    <hr />
                </div>
                )
            })}
        </div>
    )

}

export default Orders;
