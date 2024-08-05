import { Component } from 'react';

interface PortadaProps {
    image_url: string;
}

class Portada extends Component<PortadaProps> {
    render() {
        const { image_url } = this.props;

        return (
            <div id="portada" className="portada-cmp item-grilla">
                <img src={image_url} alt="Portada" />
            </div>
        );
    }
}

export default Portada;
