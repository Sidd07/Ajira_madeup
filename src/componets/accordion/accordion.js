import React, { useState, useRef } from "react";


import "./accordion.css";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );      
    }

    return (
        <div class="container">                      
            <h3 className="text-left cursor-pointer" onClick={toggleAccordion}>{props.title}
            <span className="float-right"><i className={setActive === "active" ? "fas fa-angle-up" : "fas fa-angle-down"}></i></span></h3>
            <label className="float-left text-center"> {props.content}</label>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion_content mt-15pt" >
                <div>
                {props.children}
                </div>
            </div>
        </div>
    );
}

export default Accordion;
