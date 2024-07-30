export interface AtributosObjeto {
    ataque: number;
    esquiva: number;
    bloqueo: number;
    velocidad: number;
    vidaMax: number;
    poderMax: number;
}
export interface AtributosPersonaje extends AtributosObjeto {
    vidaActl: number;
    poderActl: number;
}

export interface ClsEntidadBaseProps {
    nombre: string;
    descripcion: string;
}

export class EntidadBase {
    private __nombre: string;
    private __descripcion: string;

    constructor({
        nombre = "nada",
        descripcion = "sin descripción.",
    }) {
        this.__nombre = nombre;
        this.__descripcion = descripcion;
    }

    public actualizarTodo(nuevosProps: ClsEntidadBaseProps): void {
        if (nuevosProps.nombre !== undefined)
            this.nombre = nuevosProps.nombre;

        if (nuevosProps.descripcion !== undefined)
            this.descripcion = nuevosProps.descripcion;
    }

    get nombre() {
        return this.__nombre;
    }

    get descripcion() {
        return this.__descripcion;
    }

    set nombre(nombre: string) {
        this.__nombre = nombre;
    }

    set descripcion(descripcion: string) {
        this.__descripcion = descripcion;
    }
}
