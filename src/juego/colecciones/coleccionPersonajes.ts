export interface PersonajeProps {
    nombre: string;
    portada: string;
    icono: string;
    descripcion: string;
    ataque: number;
    esquiva: number;
    bloqueo: number;
    velocidad: number;
    vida: number;
    poder: number;
    arma1: string;
    arma2: string;
    equipo1: string;
    equipo2: string;
    equipo3: string;
    habilidad1: string;
    habilidad2: string;
    habilidad3: string;
}

const esbirros: { [key: string]: PersonajeProps } = {
    nuevo_esbirro: {
        nombre: "nuevo esbirro",
        portada: "img/nuevopj.png",
        icono: "",
        descripcion: "Sin descripción.",

        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vida: 0,

        poder: 0,

        arma1: "nada",
        arma2: "nada",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "habilidad 1",
        habilidad2: "habilidad 2",
        habilidad3: "habilidad 3",
    },
    lobo: {
        nombre: "lobo",
        portada: "img/lobo.png",
        icono: "",

        ataque: 3,
        esquiva: 2,
        bloqueo: 1,
        velocidad: 6,
        vida: 19,

        poder: 22,

        arma1: "mordisco",
        arma2: "garras",

        habilidad1: "derribo",
        habilidad2: "desgarro",
        habilidad3: "habilidad 3",

        descripcion:
            "LOBO <br> Criatura de Sangre <br> Coste de invocación: 20",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    esqueleto: {
        nombre: "esqueleto",
        portada: "img/esqueleto.png",
        icono: "",
        ataque: 4,
        esquiva: 2,
        bloqueo: 3,
        velocidad: 2,
        vida: 30,

        poder: 27,

        arma1: "mordisco",
        arma2: "garras",
        habilidad1: "derribo",
        habilidad2: "desgarro",
        habilidad3: "habilidad 3",
        descripcion:
            "ESQUELETO <br> Criatura de Vida y Éter <br> Coste de invocación: 15",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    kardanto: {
        nombre: "kardanto",
        portada: "img/kardanto.png",
        icono: "",
        ataque: 4,
        esquiva: 2,
        bloqueo: 4,
        velocidad: 3,
        vida: 31,

        poder: 34,

        arma1: "hojas",
        arma2: "esporas",
        habilidad1: "enraizar",
        habilidad2: "envenenar",
        habilidad3: "habilidad 3",
        descripcion:
            "KARDANTO <br> Elemental de Vida <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    momontu: {
        nombre: "momontu",
        portada: "img/momontu.png",
        icono: "",
        ataque: 5,
        esquiva: 3,
        bloqueo: 1,
        velocidad: 4,
        vida: 20,

        poder: 51,

        arma1: "magia",
        arma2: "garras",
        habilidad1: "bola de fuego",
        habilidad2: "desgarro",
        habilidad3: "habilidad 3",
        descripcion:
            "MOMONTU <br> Elemental de Fuego <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    tortakla: {
        nombre: "tortakla",
        portada: "img/tortakla.png",
        icono: "",
        ataque: 4,
        esquiva: 1,
        bloqueo: 5,
        velocidad: 2,
        vida: 40,

        poder: 19,

        arma1: "aliento",
        arma2: "pinzas",
        habilidad1: "tsunami",
        habilidad2: "triturar",
        habilidad3: "habilidad 3",
        descripcion:
            "TORTAKLA <br> Elemental de Agua <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    ghalidos: {
        nombre: "ghalidos",
        portada: "img/ghalidos.png",
        icono: "",
        ataque: 4,
        esquiva: 4,
        bloqueo: 1,
        velocidad: 5,
        vida: 25,

        poder: 19,

        arma1: "garras",
        arma2: "alas",
        habilidad1: "tornado",
        habilidad2: "desgarro",
        habilidad3: "habilidad 3",
        descripcion:
            "GHALIDOS <br> Elemental de Aire <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    terronte: {
        nombre: "terronte",
        portada: "img/terronte.png",
        icono: "",
        ataque: 4,
        esquiva: 1,
        bloqueo: 4,
        velocidad: 3,
        vida: 40,

        poder: 31,

        arma1: "mirada",
        arma2: "punno",
        habilidad1: "ataque poderoso",
        habilidad2: "terremoto",
        habilidad3: "habilidad 3",
        descripcion:
            "TERRONTE <br> Elemental de Tierra <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    naigaran: {
        nombre: "naigaran",
        portada: "img/naigaran.png",
        icono: "",
        ataque: 5,
        esquiva: 3,
        bloqueo: 2,
        velocidad: 4,
        vida: 20,

        poder: 39,

        arma1: "mordisco",
        arma2: "tentaculos",
        habilidad1: "confundir",
        habilidad2: "desgarro",
        habilidad3: "habilidad 3",
        descripcion:
            "NAIGARAN <br> Elemental Etereo <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    sarcomos: {
        nombre: "sarcomos",
        portada: "img/sarcomos.png",
        icono: "",
        ataque: 5,
        esquiva: 4,
        bloqueo: 2,
        velocidad: 4,
        vida: 23,

        poder: 24,

        arma1: "mente",
        arma2: "garras",
        habilidad1: "confundir",
        habilidad2: "desgarro",
        habilidad3: "habilidad 3",
        descripcion:
            "SARCOMOS <br> Elemental Psíquico <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    cinirus: {
        nombre: "cinirus",
        portada: "img/cinirus.png",
        icono: "",
        ataque: 4,
        esquiva: 3,
        bloqueo: 4,
        velocidad: 3,
        vida: 25,

        poder: 31,

        arma1: "cuernos",
        arma2: "cascos",
        habilidad1: "sanar",
        habilidad2: "sentencia",
        habilidad3: "habilidad 3",
        descripcion:
            "CINIRUS <br> Elemental de Luz <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    raizor: {
        nombre: "raizor",
        portada: "img/raizor.png",
        icono: "",
        ataque: 4,
        esquiva: 4,
        bloqueo: 2,
        velocidad: 4,
        vida: 25,

        poder: 37,

        arma1: "garras",
        arma2: "aliento",
        habilidad1: "relampago",
        habilidad2: "sobrecarga",
        habilidad3: "habilidad 3",
        descripcion:
            "RAIZOR <br> Elemental de Rayo <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
    raptor: {
        nombre: "raptor",
        portada: "img/raptor.png",
        icono: "",
        ataque: 4,
        esquiva: 4,
        bloqueo: 2,
        velocidad: 4,
        vida: 25,

        poder: 37,

        arma1: "garras",
        arma2: "mordisco",
        habilidad1: "desgarro",
        habilidad2: "triturar",
        habilidad3: "ira ciega",
        descripcion:
            "RAPTOR <br> Criatura de sangre <br> Coste de invocación: 20",
        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",
    },
};

const avatares: { [key: string]: PersonajeProps } = {
    nuevo_avatar: {
        nombre: "nuevo avatar",
        portada: "img/nuevopj.png",
        icono: "",
        descripcion: "Sin descripción.",

        ataque: 0,
        esquiva: 0,
        bloqueo: 0,
        velocidad: 0,
        vida: 0,

        poder: 0,

        arma1: "nada",
        arma2: "nada",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "habilidad 1",
        habilidad2: "habilidad 2",
        habilidad3: "habilidad 3",
    },
    guerrero: {
        nombre: "guerrero",
        portada: "img/guerrero.png",
        icono: "",
        descripcion:
            "combatiente cuerpo a cuerpo, con mucha resistencia pero muy poco daño base.",

        ataque: 4,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 40,

        poder: 40,

        arma1: "espada",
        arma2: "escudo",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "embestida con escudo",
        habilidad2: "cobertura",
        habilidad3: "ataque poderoso",
    },
    chaman: {
        nombre: "chaman",
        portada: "img/chaman.png",
        icono: "",
        descripcion:
            "combatiente mágico elemental, utiliza totems para ampliar su área de efectos.",

        ataque: 5,
        esquiva: 3,
        bloqueo: 3,
        velocidad: 3,
        vida: 40,

        poder: 43,

        arma1: "magia",
        arma2: "totem",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "relámpago",
        habilidad2: "terremoto",
        habilidad3: "sobrecarga",
    },
    barbaro: {
        nombre: "barbaro",
        portada: "img/barbaro.png",
        icono: "",
        descripcion:
            "combatiente cuerpo a cuerpo que genera el mayor daño posible sin pensar mucho en su seguridad.",

        ataque: 6,
        esquiva: 1,
        bloqueo: 1,
        velocidad: 4,
        vida: 33,

        poder: 38,

        arma1: "espada",
        arma2: "patada",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "torbellino",
        habilidad2: "incansable",
        habilidad3: "ataque poderoso",
    },
    picaro: {
        nombre: "picaro",
        portada: "img/picaro.png",
        icono: "",
        descripcion:
            "combatiente sigiloso y rápido, siempre intenta infligir daño sin quedar expuesto.",

        ataque: 4,
        esquiva: 4,
        bloqueo: 2,
        velocidad: 4,
        vida: 25,

        poder: 46,

        arma1: "daga",
        arma2: "daga",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "ataque doble",
        habilidad2: "sigilo",
        habilidad3: "desarmar",
    },
    mago: {
        nombre: "mago",
        portada: "img/mago.png",
        icono: "",
        descripcion:
            "experto en el manejo de armas y habilidades mágicas, mantiene distancia de sus enemigos.",

        ataque: 5,
        esquiva: 3,
        bloqueo: 1,
        velocidad: 4,
        vida: 20,

        poder: 54,

        arma1: "varita",
        arma2: "daga",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "bola de hielo",
        habilidad2: "explosiondeescarcha",
        habilidad3: "confundir",
    },
    paladin: {
        nombre: "paladin",
        portada: "img/paladin.png",
        icono: "",
        descripcion:
            "combatiente mixto, con buen daño cuerpo a cuerpo y control de habilidades mágicas.",

        ataque: 5,
        esquiva: 3,
        bloqueo: 4,
        velocidad: 3,
        vida: 30,

        poder: 41,

        arma1: "hojaruna",
        arma2: "magia",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "sanar",
        habilidad2: "sentencia",
        habilidad3: "exorcismo",
    },
    cazador: {
        nombre: "cazador",
        portada: "img/cazador.png",
        icono: "",
        descripcion:
            "combatiente de larga distancia, utiliza invocaciones a modo de mascotas.",

        ataque: 4,
        esquiva: 3,
        bloqueo: 1,
        velocidad: 5,
        vida: 20,

        poder: 39,

        arma1: "arco",
        arma2: "daga",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "flechas multiples",
        habilidad2: "flecha energizada",
        habilidad3: "invocar",
    },
    monje: {
        nombre: "monje",
        portada: "img/monje.png",
        icono: "",
        descripcion:
            "combatiente cuerpo a cuerpo con armas naturales, aumenta el daño utilizando mucha energía.",

        ataque: 4,
        esquiva: 4,
        bloqueo: 3,
        velocidad: 4,
        vida: 23,

        poder: 39,

        arma1: "punno",
        arma2: "patada",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "ataque multiple",
        habilidad2: "golpe de chi",
        habilidad3: "desarmar",
    },
    druida: {
        nombre: "druida",
        portada: "img/druida.png",
        icono: "",
        descripcion:
            "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 25,

        poder: 40,

        arma1: "baculo",
        arma2: "runa",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "enraizar",
        habilidad2: "envenenar",
        habilidad3: "sanar",
    },

    nigromante: {
        nombre: "nigromante",
        portada: "img/nigromante.png",
        icono: "",
        descripcion:
            "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 25,

        poder: 40,

        arma1: "baculo",
        arma2: "runa",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "enraizar",
        habilidad2: "envenenar",
        habilidad3: "sanar",
    },
    paladinoscuro: {
        nombre: "paladin oscuro",
        portada: "img/paladinoscuro.png",
        icono: "",
        descripcion:
            "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 25,

        poder: 40,

        arma1: "hojaruna",
        arma2: "magia",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "drenar",
        habilidad2: "ataque poderoso",
        habilidad3: "reanimar",
    },
    guardiarunico: {
        nombre: "guardia runico",
        portada: "img/guardiarunico.png",
        icono: "",
        descripcion:
            "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 25,

        poder: 40,

        arma1: "hojaruna",
        arma2: "escudo",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "embestida con escudo",
        habilidad2: "enraizar",
        habilidad3: "envenenar",
    },

    // ! NUEVOS AVATARES HUMANOS DEBEN IR DESPUES DE "nuevopj"
};

const avataresOcultos: { [key: string]: PersonajeProps } = {
    nigromante: {
        nombre: "nigromante",
        portada: "img/nigromante.png",
        icono: "",
        descripcion:
            "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 25,

        poder: 40,

        arma1: "baculo",
        arma2: "runa",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "enraizar",
        habilidad2: "envenenar",
        habilidad3: "sanar",
    },
    paladinoscuro: {
        nombre: "paladin oscuro",
        portada: "img/paladinoscuro.png",
        icono: "",
        descripcion:
            "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 25,

        poder: 40,

        arma1: "hojaruna",
        arma2: "magia",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "drenar",
        habilidad2: "ataque poderoso",
        habilidad3: "reanimar",
    },
    guardiarunico: {
        nombre: "guardia runico",
        portada: "img/guardiarunico.png",
        icono: "",
        descripcion:
            "combatiente mágico con habilidades del Reino Vida, prefiere sanar antes que dañar.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 5,
        velocidad: 3,
        vida: 25,

        poder: 40,

        arma1: "hojaruna",
        arma2: "escudo",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "embestida con escudo",
        habilidad2: "enraizar",
        habilidad3: "envenenar",
    },
    soldado: {
        nombre: "soldado",
        portada: "img/soldado.png",
        icono: "",
        descripcion:
            "Combatiente con poco entrenamiento y equipado con armas de tecnología arcana.",

        ataque: 5,
        esquiva: 2,
        bloqueo: 4,
        velocidad: 3,
        vida: 20,

        poder: 55,

        arma1: "fusil",
        arma2: "granada",

        equipo1: "nada",
        equipo2: "nada",
        equipo3: "nada",

        habilidad1: "",
        habilidad2: "",
        habilidad3: "",
    },
};

export default { esbirros, avatares, avataresOcultos };
