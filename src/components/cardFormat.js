import React from "react";
import "./style.css";
// import { tsPropertySignature } from "@babel/types";

function MakeCard(props) {
    return (
        <div className="card">
                <img
                    id={props.id}
                    suit={props.name}
                    alt={props.alt}
                    src="https://i.imgur.com/tz03p1Y.png"
                />
        </div>
    );
}

export default MakeCard;
