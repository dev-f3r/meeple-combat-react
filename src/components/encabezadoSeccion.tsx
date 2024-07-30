import React from "react";

interface EncabezadoSeccionProps {
    nombre: string
}

const EncabezadoSeccion: React.FC<EncabezadoSeccionProps> = (({ nombre }) => {
    return (
        <div className={`item-grilla encabezado-${nombre} el-negro`}>
            <span className={`texto-blanco`}>{nombre.toUpperCase()}</span>
        </div>
    )
})

export default EncabezadoSeccion;