import React, { Component } from "react";
import Arma from "../../juego/modelos/arma";

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
            <button id={`arma${slot}`} className={`arma-btn`}>
                <img className="arma-img el-blanco" src={`/src/assets/${arma.icono}`} />
                <span className="arma-nombre el-blanco texto-negro">{arma.nombre}</span>
            </button>
        )
    }
}

export default ArmaBtn;