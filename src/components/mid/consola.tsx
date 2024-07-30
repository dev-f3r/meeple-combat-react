import React from "react";

interface ConsolaProps {
    conten: string,
}

const Consola: React.FC<ConsolaProps> = ({ conten }) => {
    return (
        <div id="consola" className="consola-cmp item-grilla el-blanco">
            <p className="texto-negro">{conten}</p>
        </div>
    )
};

export default Consola;