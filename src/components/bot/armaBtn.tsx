import React from "react";
import Arma from "../../juego/modelos/arma";

interface ArmaBtnProps {
    slot: number,
    arma: Arma
}

const ArmaBtn: React.FC<ArmaBtnProps> = (({ slot, arma }) => {
    return (
        <button id={`arma${slot}`} className={`arma-btn`}>
            <img className="arma-img el-blanco" src="vite.svg" alt="" />
            <span className="arma-nombre el-blanco texto-negro">{arma.nombre}</span>
        </button>
    )
})

export default ArmaBtn;