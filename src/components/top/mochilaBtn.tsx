import { Component } from 'react';

import "./../../styles/top.css";

const mochilaImgSrc = "/src/assets/img/mochila.png";

class MochilaBtn extends Component {
    render() {
        return (
            <button id="mochila" className="mochila-cmp item-grilla btn-custom el-blanco">
                <img id="mochilaImg" className="mochila-item btn-custom-img" src={mochilaImgSrc} alt="" />
            </button>
        );
    }
}

export default MochilaBtn;
