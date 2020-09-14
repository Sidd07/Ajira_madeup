import React from 'react';
import './orders.scss'

const Orders = (props) => {
    const productData = props.data;
   
    return (
        <div className="border-all sm-border-none sm-border-top mb-20 mr-10 p-20 sm-p-0 sm-m-0">
            <h1 className="width-100 text-left pl-10 sm-display-none"> My Orders</h1>
            <h3 className="width-100 text-left  lg-display-none"> Pending Orders</h3>
            {productData.map((value, index) => {
                return (
                <div className="row p-20 sm-p-0 m-10 sm-m-0" key={index}>
                    <div className="block-20 sm-block-20">
                        <div className="order-image"></div>
                    </div>
                    <div className="block-50 sm-block-50">
                        <div className="float-left">
                            <label className="float-left sm-font-12"> Order {value.orderId} </label>
                            <br />
                            <h3 className="text-left sm-font-15 sm-p-0 sm-m-0 sm-mtb-10">{value.pname}</h3>
                            <label className="float-left sm-font-12"> Express Delivery by {value.dDate}</label>
                        </div>
                    </div>

                    <div className="block-20 sm-font-20 sm-block-20 ml-10pt sm-m-0">
                        <label className="float-left sm-font-12">{value.pType}</label>
                        <br />
                        <h3 className="text-right sm-font-15 sm-ptb-10">RS {value.price}</h3>
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
