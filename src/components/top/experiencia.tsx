import { Component } from 'react';

interface ExperienciaProps {
    exp: number;
}

class Experiencia extends Component<ExperienciaProps> {
    render() {
        const { exp } = this.props;

        return (
            <button id="exp" className="exp-cmp item-grilla btn-custom el-blanco">
                <img id="exp_img" className="exp-item" src="vite.svg" alt="" />
                <span id="exp_txt" className="exp-item">{exp}</span>
            </button>
        );
    }
}

export default Experiencia;
