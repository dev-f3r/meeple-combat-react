export interface ObjetoProps {
    nombre: string;
    icono: string;
    descripcion: string;
    nivel: number;
    ataque: number;
    esquiva: number;
    bloqueo: number;
    velocidad: number;
    vida: number;
    poder: number;
}

const objetosEquipamiento: { [key: string]: ObjetoProps } = {
    nada: {
        nombre: "nada",
        icono: "img/nada.png",
        descripcion: "Sin descripción.",
        nivel: 0,
        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vida: 0,
        poder: 0,
    },
    armaduraLigera: {
        nombre: "Armadura Ligera",
        icono: "img/armaduraligera.png",
        descripcion:
            "Armadura ligera <br> +1 al bloqueo / +10 a la vida máxima",
        nivel: 1,
        ataque: 0,
        esquiva: 0,
        bloqueo: 1,
        velocidad: 0,
        vida: 10,
        poder: 0,
    },
    armaduraMedia: {
        nombre: "Armadura Media",
        icono: "img/armaduramedia.png",
        descripcion:
            "Armadura Media <br> +2 al bloqueo / +15 de vida máxima <br> -1 a esquiva y velocidad",
        nivel: 1,
        ataque: 0,
        esquiva: -1,
        bloqueo: 2,
        velocidad: -1,
        vida: 15,
        poder: 0,
    },
    armaduraPesada: {
        nombre: "Armadura Pesada",
        icono: "img/armadurapesada.png",
        descripcion:
            "Armadura Pesada <br> +3 de bloqueo / +20 de vida máxima <br> -1 al ataque / -2 a esquiva y velocidad.",
        nivel: 1,
        ataque: -1,
        esquiva: -2,
        bloqueo: 3,
        velocidad: -2,
        vida: 20,
        poder: 0,
    },
    anillo: {
        nombre: "Anillo",
        icono: "img/anillo.png",
        descripcion: "Anillo <br> +3 al ataque <br> -10 de poder máximo",
        nivel: 1,
        ataque: 3,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vida: 0,
        poder: -10,
    },
    collar: {
        nombre: "Collar",
        icono: "img/collar.png",
        descripcion: "Collar <br> +3 a la esquiva <br> -10 de poder máximo",
        nivel: 1,
        ataque: 0,
        esquiva: 3,
        bloqueo: 0,
        velocidad: 0,
        vida: 0,
        poder: -10,
    },
    brazal: {
        nombre: "Brazal",
        icono: "img/brazal.png",
        descripcion: "Brazal <br> +3 de velocidad <br> -10 de poder máximo",
        nivel: 1,
        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 3,
        vida: 0,
        poder: -10,
    },
};

export default { objetosEquipamiento };
