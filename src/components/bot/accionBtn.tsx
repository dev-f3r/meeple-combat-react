import React, { Component } from "react";

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
            <button className="btn-custom accion-btn el-blanco texto-negro">{texto}</button>
        )
    }
}

export default AccionBtn;