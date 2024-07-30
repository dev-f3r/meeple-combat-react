import { ClsEntidadBaseProps, EntidadBase } from "./utils";

interface ClsArmaProps extends ClsEntidadBaseProps {
    icono: string;
    danno: number;
    tipo: string;
    coste: number;
}

export default class Arma extends EntidadBase {
    private __icono: string;
    private __danno: number;
    private __tipo: string;
    private __coste: number;
    constructor({
        nombre = "nada",
        icono = "img/nada.png",
        descripcion = "sin descripcion",
        danno = 0,
        tipo = "",
        coste = 0,
    }) {
        super({ nombre, descripcion });
        this.__icono = icono;
        this.__danno = danno;
        this.__tipo = tipo;
        this.__coste = coste;
    }

    public actualizarTodo(nuevosProps: ClsArmaProps): void {
        super.actualizarTodo({
            nombre: nuevosProps.nombre,
            descripcion: nuevosProps.descripcion,
        });
        if (nuevosProps.icono !== undefined) this.icono = nuevosProps.icono;
        if (nuevosProps.danno !== undefined) this.danno = nuevosProps.danno;
        if (nuevosProps.tipo !== undefined) this.tipo = nuevosProps.tipo;
        if (nuevosProps.coste !== undefined) this.coste = nuevosProps.coste;
    }

    get icono() {
        return this.__icono;
    }
    get danno() {
        return this.__danno;
    }
    get tipo() {
        return this.__tipo;
    }
    get coste() {
        return this.__coste;
    }

    set icono(icono: string) {
        this.__icono = icono;
    }
    set danno(danno: number) {
        this.__danno = danno;
    }
    set tipo(tipo: string) {
        this.__tipo = tipo;
    }
    set coste(coste: number) {
        this.__coste = coste;
    }
}
