import React, { Component } from "react";

import DireccionalesVerticales from "./direccionalesVerticales";

import "./../../styles/mid.css";

interface ConsolaProps {
    conten: string,
}

interface ConsolaState {

}

const derechaImgSrc = "/src/assets/img/derecha.png"

class Consola extends Component<ConsolaProps, ConsolaState> {
    constructor(props: ConsolaProps) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        const { conten } = this.props;

        return (
            <div id="consola" className="consola-cmp item-grilla el-blanco" onClick={() => console.log(conten)}>
                <DireccionalesVerticales />
                <button className="direccional-btn" id="izquierdaBtn">
                    <img src={derechaImgSrc} className="direccional-img" />
                </button>
                <p className="texto-negro" id="consolaVal">{conten}</p>
                <button className="direccional-btn" id="derechaBtn">
                    <img src={derechaImgSrc} className="direccional-img" />
                </button>
            </div>
        )
    }
}

export default Consola;