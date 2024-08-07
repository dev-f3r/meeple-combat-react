import React, { Component } from "react";

import "./../../styles/mid.css";

interface DireccionalesProps {
}

interface DireccionalesState {

}

const abajoImgSrc = "/src/assets/img/abajo.png"

class DireccionalesVerticales extends Component<DireccionalesProps, DireccionalesState> {
    constructor(props: DireccionalesProps) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        return (
            <div id="direccionalesVerticales" className="">
                <button className="direccional-btn" id="arribaBtn">
                    <img src={abajoImgSrc} className="direccional-img" />
                </button>
                <button className="direccional-btn" id="abajoBtn">
                    <img src={abajoImgSrc} className="direccional-img" />
                </button>
            </div>
        )
    }
}

export default DireccionalesVerticales;