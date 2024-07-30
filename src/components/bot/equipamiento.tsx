import React from "react";
import Objeto from "../../juego/modelos/objeto";

interface EquipamientoProps {
    equipo: Objeto[]
}



const Equipamiento: React.FC<EquipamientoProps> = ({ equipo }) => {
    return (
        <div key={"equipamiento"} id="equipamiento" className="equipamiento-cmp">
            {
                equipo.map((objeto, i) => {
                    // TODO: Mostrar el icono de cada objeto del equipamiento.
                    return <button id={`equipo${i + 1}`} key={`equipo${i + 1}`} className="equipo-btn btn-custom el-blanco">
                        {/* <img src={objeto.icono} alt="" /> */}
                        <img src="vite.svg" alt="" />
                        <span className="texto-negro">{objeto.nivel}</span>
                    </button>
                })
            }
        </div>
    )
}

export default Equipamiento;