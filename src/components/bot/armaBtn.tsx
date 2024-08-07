import React, { Component } from "react";
import Arma from "../../juego/modelos/arma";

import "../../styles/bot.css";

import { capitalizar } from "../../utils/helpers";

interface ArmaBtnProps {
    slot: number,
    arma: Arma
}

interface ArmaBtnState {

}

class ArmaBtn extends Component<ArmaBtnProps, ArmaBtnState> {
    constructor(props: ArmaBtnProps) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        const { slot, arma } = this.props;

        return (
            <button id={`arma${slot}`} className={`arma-btn item-grilla btn-custom el-blanco`}>
                <div className="arma-img-container">
                    <img className="arma-img el-blanco btn-custom-img" src={`/src/assets/${arma.icono}`} />
                </div>
                <span className="arma-nombre el-blanco texto-negro">{capitalizar(arma.nombre)}</span>
            </button>
        )
    }
}

export default ArmaBtn;