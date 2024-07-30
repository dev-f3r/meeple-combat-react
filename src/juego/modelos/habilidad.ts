import { ClsEntidadBaseProps, EntidadBase } from "./utils";

interface ClsHabilidadProps extends ClsEntidadBaseProps {
    coste: number;
}

export default class Habilidad extends EntidadBase {
    private __coste: number;
    constructor({
        nombre = "nada",
        descripcion = "sin descripcion",
        coste = 0,
    }) {
        super({ nombre, descripcion });
        this.__coste = coste;
    }

    public actualizarTodo(nuevosProps: ClsHabilidadProps): void {
        super.actualizarTodo({
            nombre: nuevosProps.nombre,
            descripcion: nuevosProps.descripcion,
        });
        if (nuevosProps.coste !== undefined) this.coste = nuevosProps.coste;
    }

    get coste() {
        return this.__coste;
    }
    set coste(coste: number) {
        this.__coste = coste;
    }
}
