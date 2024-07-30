import React from "react";

interface ExperienciaProps {
    exp: number,
}

const Experiencia: React.FC<ExperienciaProps> = ({ exp }) => {
    return (
        <button id="exp" className="exp-cmp item-grilla btn-custom el-blanco">
            <img id="exp_img" className="exp-item" src="vite.svg" alt="" />
            <span id="exp_txt" className="exp-item">{exp}</span>
        </button>
    )
}

export default Experiencia