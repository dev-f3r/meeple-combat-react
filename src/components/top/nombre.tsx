import { Component } from 'react';

import "./../../styles/top.css";

interface NombreProps {
    nombre: string;
}

class Nombre extends Component<NombreProps> {
    render() {
        const { nombre } = this.props;

        return (
            <button id="nombre" className="nombre-cmp item-grilla btn-custom el-blanco texto-negro">
                {nombre.toUpperCase()}
            </button>
        );
    }
}

export default Nombre;
