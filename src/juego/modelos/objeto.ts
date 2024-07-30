import { AtributosObjeto, EntidadBase } from "./utils";

// interface ClsObjetoProps extends ClsEntidadBaseProps {
//     atributos: AtributosObjeto;
//     nivel: number;
// }

function objetoAtributosDefault(): AtributosObjeto {
    return {
        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vidaMax: 0,
        poderMax: 0,
    };
}

export default class Objeto extends EntidadBase {
    private __icono: string;
    private __atributos: AtributosObjeto;
    private __nivel: number;
    constructor({
        nombre = "nada",
        descripcion = "sin descripcion",
        icono = "img/nada.png",
        atributos = objetoAtributosDefault(),
        nivel = 0,
    }) {
        super({ nombre, descripcion });
        this.__icono = icono;
        this.__atributos = atributos;
        this.__nivel = nivel;
    }

    get icono() {
        return this.__icono;
    }

    get atributos() {
        return this.__atributos;
    }

    get nivel() {
        return this.__nivel;
    }
}
