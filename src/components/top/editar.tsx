import React, { Component } from "react";

import "./../../styles/top.css";

interface EditarProps {
    modo: string;
    handler: () => void;
}

interface EditarState {
    imgSrc: string;
}

const editarImgSrc: string = "/src/assets/img/editar.png";
const guardarImgSrc: string = "/src/assets/img/guardar.png";

class Editar extends Component<EditarProps, EditarState> {
    constructor(props: EditarProps) {
        super(props);
        this.state = {
            imgSrc: editarImgSrc,
        };
    }

    componentDidUpdate(prevProps: Readonly<EditarProps>): void {
        if (prevProps.modo !== this.props.modo) {
            this.setState({
                imgSrc: this.props.modo === "jugar" ? editarImgSrc : guardarImgSrc,
            })
        }
    }

    handleClick() {
        this.props.handler();
    }

    render(): React.ReactNode {
        return (
            <button
                id="editar"
                className="editar-cmp item-grilla btn-custom el-blanco"
                onClick={() => this.handleClick()}
            >
                <img
                    id="editarImg"
                    className="editar-img btn-custom-img"
                    src={this.state.imgSrc}
                    alt=""
                />
            </button>
        );
    }
}

export default Editar;
