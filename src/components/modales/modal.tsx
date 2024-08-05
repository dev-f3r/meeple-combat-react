import { Component, ReactNode } from "react";

interface ModalProps {

}

interface ModalState {

}

class Modal extends Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props)
        this.state = {

        }
    }


    render(): ReactNode {
        return (
            <div className="modal">
                
            </div>
        )
    }
}

export default Modal;