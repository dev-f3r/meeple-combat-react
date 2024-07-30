import React from "react";
import { AtributosPersonaje } from "../../juego/modelos/utils";
interface AtributosProps {
    atributos: AtributosPersonaje;
}

const Atributos: React.FC<AtributosProps> = ({ atributos }) => {
    return (
        <div key={"atributos"} id="atributos" className="atributos-cmp">
            {Object.entries(atributos).map(([key, value]) => {
                if (key !== "vidaMax" && key !== "poderMax") {
                    return <button key={key} className="atributos-btn btn-custom el-blanco" id={`${key}_btn`}>
                        <img id={`${key}Img`} src={`vite.svg`} />
                        <span className="atributos-txt texto-negro" id={`${key}_txt`}>
                            {value}
                        </span>
                    </button>
                }
            })}
        </div>
    );
};


export default Atributos;