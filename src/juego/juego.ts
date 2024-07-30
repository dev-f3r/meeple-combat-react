import Personaje from "./modelos/personaje";

// const N_PERS = 6;

function personajesDefault(): Personaje[] {
    return [
        new Personaje({
            nombre: "bienvenido",
            portada: "img/logo-meeple-combat.png",
            descripcion: "consola",
            // atributos: {ataque: 10, esquiva: 10, bloqueo: 10, velocidad: 10, vidaMax: 10, poderMax: 10, vidaActl: 10, poderActl: 10}
        }),
        new Personaje({
            nombre: "esbirro 1",
            portada: "img/e1.png",
        }),
        new Personaje({
            nombre: "esbirro 2",
            portada: "img/e2.png",
        }),
        new Personaje({
            nombre: "esbirro 3",
            portada: "img/e3.png",
        }),
        new Personaje({
            nombre: "esbirro 4",
            portada: "img/e4.png",
        }),
        new Personaje({
            nombre: "esbirro 5",
            portada: "img/e5.png",
        }),
    ];
}

export default class Juego {
    private static instance: Juego;
    private __modo: string = "jugar";
    private __personajes: Personaje[];

    private constructor(personajes: Personaje[]) {
        this.__personajes = personajes;
    }

    public static getInstance(personajes = personajesDefault()): Juego {
        if (!Juego.instance) {
            Juego.instance = new Juego(personajes);
        }
        return Juego.instance;
    }

    public get modo(): string {
        return this.__modo;
    }

    public get personajes(): Personaje[] {
        return this.__personajes;
    }
}
