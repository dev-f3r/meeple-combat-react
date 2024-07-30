import React from "react";

interface PortadaProps {
    image_url: string;
}

const Portada: React.FC<PortadaProps> = ({ image_url }) => {
    return (
        <div id="portada" className="portada-cmp item-grilla">
            <img src={image_url} alt="Portada" />
        </div>
    );
};

export default Portada;
