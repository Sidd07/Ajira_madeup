import React from "react";

const OrderStatus = (props) => {
    let orderStat = props.orderStat;
    console.log("im order status", orderStat)
    return (<div >

        <div className="row pl-20">
            <div className="block-40">
                <div className="border-left text-gray">
                    {orderStat.map ((value,index) => {
                        return (
                            <div key={index}>
                                <div className={value.present== true? "present-status order-stat  float-left": "order-stat  float-left"}></div>
                                <p className="text-left pl-10pt label"> {value.orderstatus} </p>
                                <p className="text-left pl-10pt"> {value.date} </p>
                            </div>
                        )})
                    }

                </div>
            </div>
        </div>
    </div>)
}

export default OrderStatus