import React from "react";

interface AccionBtnProps {
    texto: string,
}

const AccionBtn: React.FC<AccionBtnProps> = (({ texto }) => {
    return (
        <button className="btn-custom accion-btn el-blanco texto-negro">{texto}</button>
    )
})

export default AccionBtn;