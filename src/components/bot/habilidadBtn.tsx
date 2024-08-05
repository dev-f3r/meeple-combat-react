import { Component } from "react";

interface HabilidadBtnProps {
    slot: number;
    nombre: string;
}

class HabilidadBtn extends Component<HabilidadBtnProps> {
    render() {
        const { slot, nombre } = this.props;

        return (
            <button className="btn-custom habilidad-btn el-blanco texto-negro" id={`habilidad${slot}`}>
                {nombre}
            </button>
        );
    }
}

export default HabilidadBtn;
