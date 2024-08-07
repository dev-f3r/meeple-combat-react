import { Component } from 'react';

import "./../../styles/top.css";

interface ExperienciaProps {
    exp: number;
}

const experienciaImgSrc: string = "/src/assets/img/experiencia.png"

class Experiencia extends Component<ExperienciaProps> {
    render() {
        const { exp } = this.props;

        return (
            <button id="exp" className="exp-cmp item-grilla btn-custom el-blanco">
                <img id="expImg" className="exp-item btn-custom-img" src={experienciaImgSrc} alt="" />
                <span id="expVal" className="exp-item">{exp}</span>
            </button>
        );
    }
}

export default Experiencia;
