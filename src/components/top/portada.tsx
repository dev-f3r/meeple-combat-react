import { Component } from 'react';

import "./../../styles/top.css";

interface PortadaProps {
    image_url: string;
}

class Portada extends Component<PortadaProps> {
    render() {
        const { image_url } = this.props;

        return (
            <div id="portada" className="portada-cmp item-grilla">
                <img className="portada-img" src={`src/assets/${image_url}`} alt="Portada" />
            </div>
        );
    }
}

export default Portada;
