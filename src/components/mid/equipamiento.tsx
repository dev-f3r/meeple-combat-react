import { Component } from "react";
import Objeto from "../../juego/modelos/objeto";

import "./../../styles/mid.css";

interface EquipamientoProps {
    equipo: Objeto[];
}

class Equipamiento extends Component<EquipamientoProps> {
    render() {
        const { equipo } = this.props;

        return (
            <div id="equipamiento" className="equipamiento-cmp">
                {equipo.map((objeto, i) => (
                    <button
                        id={`objeto${i + 1}`}
                        key={`objeto${i + 1}`}
                        className="atributos-btn objeto-btn btn-custom el-blanco"
                    >
                        <img
                            src={`/src/assets/${objeto.icono}`}
                            alt=""
                            className="atributo-img btn-custom-img"
                            id={`objeto${i + 1}Img`}
                        />
                        <span
                            id={`objeto${i + 1}Val`}
                            className="texto-negro atributo-txt">{objeto.nivel}
                        </span>
                    </button>
                ))}
            </div>
        );
    }
}

export default Equipamiento;
