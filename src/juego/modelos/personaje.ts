import coleccionArmas, { ArmaProps } from "../colecciones/coleccionArmas";
import Arma from "./arma";
import Habilidad from "./habilidad";
import Objeto from "./objeto";
import { EntidadBase, AtributosPersonaje, ClsEntidadBaseProps } from "./utils";

interface ClsPersonajeProps extends ClsEntidadBaseProps {
    portada: string;
    atributos: AtributosPersonaje;

    objeto1: string;
    objeto2: string;
    objeto3: string;

    arma1: string;
    arma2: string;

    habilidad1: string;
    habilidad2: string;
    habilidad3: string;
}

function personajeAtributosDefault(): AtributosPersonaje {
    return {
        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vidaMax: 0,
        poderMax: 0,
        vidaActl: 0,
        poderActl: 0,
    };
}

export default class Personaje extends EntidadBase {
    private __portada: string;
    private __atributos: AtributosPersonaje;

    private __objeto1: Objeto;
    private __objeto2: Objeto;
    private __objeto3: Objeto;

    private __arma1: Arma;
    private __arma2: Arma;

    private __habilidad1: Habilidad;
    private __habilidad2: Habilidad;
    private __habilidad3: Habilidad;

    constructor({
        nombre = "nada",
        descripcion = "sin descripcion",
        portada = "img/nada.png",
        atributos = personajeAtributosDefault(),

        objeto1 = new Objeto({}),
        objeto2 = new Objeto({}),
        objeto3 = new Objeto({}),

        arma1 = new Arma({}),
        arma2 = new Arma({}),

        habilidad1 = new Habilidad({}),
        habilidad2 = new Habilidad({}),
        habilidad3 = new Habilidad({}),
    }) {
        super({ nombre, descripcion });
        this.__portada = portada;
        this.__atributos = atributos;

        this.__objeto1 = objeto1;
        this.__objeto2 = objeto2;
        this.__objeto3 = objeto3;

        this.__arma1 = arma1;
        this.__arma2 = arma2;

        this.__habilidad1 = habilidad1;
        this.__habilidad2 = habilidad2;
        this.__habilidad3 = habilidad3;
    }

    public actualizarTodo(nuevosProps: ClsPersonajeProps): void {
        super.actualizarTodo({
            nombre: nuevosProps.nombre,
            descripcion: nuevosProps.descripcion,
        });

        if (nuevosProps.portada !== undefined)
            this.portada = nuevosProps.portada;
        if (nuevosProps.atributos !== undefined)
            Object.assign(this.atributos, nuevosProps.atributos);
        if (nuevosProps.arma1 !== undefined)
            this.actualizarArma(1, nuevosProps.arma1);
        if (nuevosProps.arma2 !== undefined)
            this.actualizarArma(2, nuevosProps.arma2);

        // TODO: logica para actualizar objetos de inventario y habilidades.
    }

    public actualizarArma(slotArma: number, nombreArmaNueva: string): void {
        const coleccionArma = this.__coleccionArma(nombreArmaNueva);
        if (coleccionArma !== undefined) {
            if (slotArma === 1)
                this.arma1.actualizarTodo(coleccionArma[nombreArmaNueva]);
            else if (slotArma == 2)
                this.arma2.actualizarTodo(coleccionArma[nombreArmaNueva]);
            else console.error("slot incorrecto");
        } else console.error("coleccion de arma no encontra", nombreArmaNueva);
    }

    private __coleccionArma(
        nombreArma: string
    ): { [key: string]: ArmaProps } | undefined {
        // TODO: Refactor.
        let out = undefined;
        if (coleccionArmas.armasMarciales[nombreArma])
            out = coleccionArmas.armasMarciales;
        if (coleccionArmas.armasNaturales[nombreArma])
            out = coleccionArmas.armasNaturales;
        if (coleccionArmas.armasOcultas[nombreArma])
            out = coleccionArmas.armasOcultas;
        return out;
    }

    get portada() {
        return this.__portada;
    }
    get atributos() {
        return this.__atributos;
    }
    get objeto1() {
        return this.__objeto1;
    }
    get objeto2() {
        return this.__objeto2;
    }
    get objeto3() {
        return this.__objeto3;
    }
    get arma1() {
        return this.__arma1;
    }
    get arma2() {
        return this.__arma2;
    }
    get habilidad1() {
        return this.__habilidad1;
    }
    get habilidad2() {
        return this.__habilidad2;
    }
    get habilidad3() {
        return this.__habilidad3;
    }

    set portada(portada: string) {
        this.__portada = portada;
    }
    set atributos(atributos: AtributosPersonaje) {
        this.__atributos = atributos;
    }
    set objeto1(objeto1: Objeto) {
        this.__objeto1 = objeto1;
    }
    set objeto2(objeto2: Objeto) {
        this.__objeto2 = objeto2;
    }
    set objeto3(objeto3: Objeto) {
        this.__objeto3 = objeto3;
    }
    set arma1(arma1: Arma) {
        this.__arma1 = arma1;
    }
    set arma2(arma2: Arma) {
        this.__arma2 = arma2;
    }
    set habilidad1(habilidad1: Habilidad) {
        this.__habilidad1 = habilidad1;
    }
    set habilidad2(habilidad2: Habilidad) {
        this.__habilidad2 = habilidad2;
    }
    set habilidad3(habilidad3: Habilidad) {
        this.__habilidad3 = habilidad3;
    }
}
