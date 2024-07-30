import React from "react";

interface HabilidadBtnProps {
    slot: number,
    nombre: string,
}

const HabilidadBtn: React.FC<HabilidadBtnProps> = (({ slot, nombre }) => {
    return (
        <button className="btn-custom habilidad-btn el-blanco texto-negro" id={`habilidad${slot}`}>{nombre}</button>
    )
})

export default HabilidadBtn;