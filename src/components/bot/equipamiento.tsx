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
                    return <button id={`equipo${i + 1}`} key={`equipo${i + 1}`} className="atributos-btn equipo-btn btn-custom el-blanco">
                        <img src={`/src/assets/${objeto.icono}`} alt="" className="atributo-img" key={`equipo${i+1}Btn`}/>
                        <span className="texto-negro atributo-txt">{objeto.nivel}</span>
                    </button>
                })
            }
        </div>
    )
}

export default Equipamiento;