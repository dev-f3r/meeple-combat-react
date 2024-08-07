import React, { Component } from "react";

import "../../styles/bot.css";

interface AccionBtnProps {
    texto: string,
}

interface AccionBtnState {

}

class AccionBtn extends Component<AccionBtnProps, AccionBtnState> {
    constructor(props: AccionBtnProps) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        const { texto } = this.props;

        return (
            <button className="btn-custom accion-btn el-blanco texto-negro item-grilla">{texto.toUpperCase()}</button>
        )
    }
}

export default AccionBtn;