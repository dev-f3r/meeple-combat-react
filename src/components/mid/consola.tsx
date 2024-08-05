import React, { Component } from "react";

interface ConsolaProps {
    conten: string,
}

interface ConsolaState {

}

class Consola extends Component<ConsolaProps, ConsolaState> {
    constructor(props: ConsolaProps) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        return (
            <div id="consola" className="consola-cmp item-grilla el-blanco" onClick={() => console.log(this.props.conten)}>
                <p className="texto-negro">{this.props.conten}</p>
            </div>
        )
    }
}

export default Consola;