import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Juego from './juego/juego';
// ? Components
import Portada from './components/top/portada';
import Experiencia from './components/top/experiencia';
import MochilaBtn from './components/top/mochilaBtn';
import Nombre from './components/top/nombre';
import Editar from './components/top/editar';
import Esbirro from './components/top/esbirro';

import Consola from './components/mid/consola';
import Atributos from './components/mid/atributos';
import Equipamiento from './components/mid/equipamiento';

import ArmaBtn from './components/bot/armaBtn';
import AccionBtn from './components/bot/accionBtn';
import HabilidadBtn from './components/bot/habilidadBtn';

import EncabezadoSeccion from './components/encabezadoSeccion';

function App() {
    const JUEGO = Juego.getInstance();
    const [MODO, setMODO] = useState(JUEGO.modo)
    const [PERS_ACTL, setPERS_ACTL] = useState(JUEGO.personajes[0])

    const cambiarModo = () => {
        setMODO(MODO === "jugar" ? "editar" : "jugar")
    }

    return (
        <div className='contenedor'>
            {/* TOP */}
            <Portada image_url={PERS_ACTL.portada} />
            <Experiencia exp={0} />
            <MochilaBtn />
            <Nombre nombre={PERS_ACTL.nombre} />
            <Esbirro />
            <Editar modo={MODO} handler={cambiarModo} />

            {/* MID */}
            <Consola conten={PERS_ACTL.descripcion} />

            <EncabezadoSeccion nombre='atributos' />
            <Atributos atributos={PERS_ACTL.atributos} />

            <EncabezadoSeccion nombre='equipo' />
            <Equipamiento equipo={[PERS_ACTL.objeto1, PERS_ACTL.objeto2, PERS_ACTL.objeto3]} />

            {/* BOT */}
            <ArmaBtn slot={1} arma={PERS_ACTL.arma1} />
            <ArmaBtn slot={2} arma={PERS_ACTL.arma2} />

            <AccionBtn texto='accion' />

            <EncabezadoSeccion nombre='habilidades' />

            <HabilidadBtn slot={1} nombre='habilidad1' />
            <HabilidadBtn slot={2} nombre='habilidad2' />
            <HabilidadBtn slot={3} nombre='habilidad3' />
        </div>
    )
}

export default App
