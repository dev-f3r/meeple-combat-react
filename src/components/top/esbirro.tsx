import { Component } from 'react';

import "./../../styles/top.css";

const esbirroImgSrc = "/src/assets/img/esbirrosico.png";

class Esbirro extends Component {
    render() {
        return (
            <button id="esbirro" className="esbirro-cmp item-grilla btn-custom el-blanco">
                <img id="esbirroImg" className='btn-custom-img' src={esbirroImgSrc} />
            </button>
        );
    }
}

export default Esbirro;
