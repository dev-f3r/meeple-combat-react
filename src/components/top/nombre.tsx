import React from "react";

interface NombreProps {
    nombre: string,
}

const Nombre: React.FC<NombreProps> = ({ nombre }) => {
    return (
        <button id="nombre" className="nombre-cmp item-grilla btn-custom el-blanco texto-negro">{nombre.toUpperCase()}</button>
    )
}

export default Nombre;