import React, { Component } from "react";
import { AtributosPersonaje } from "../../juego/modelos/utils";

interface AtributosProps {
    atributos: AtributosPersonaje;
}

interface AtributosState {

}

class Atributos extends Component<AtributosProps, AtributosState> {
    constructor(props: AtributosProps) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        const { atributos } = this.props;

        return (
            <div id="atributos" className="atributos-cmp">
                {Object.entries(atributos).map(([key, value]) => {
                    let nombreImg = key;
                    if (key === "poderActl") nombreImg = "poder";
                    if (key === "vidaActl") nombreImg = "vida";

                    if (key !== "vidaMax" && key !== "poderMax") {
                        return <button className="atributos-btn btn-custom el-blanco" id={`${key}_btn`}>
                            <img id={`${key}Img`} src={`/src/assets/img/${nombreImg}.png`} className="atributo-img" />
                            <span className="atributo-txt texto-negro" id={`${key}_txt`}>
                                {value}
                            </span>
                        </button>
                    }
                })}
            </div>
        );
    }
}

export default Atributos;
