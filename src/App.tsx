// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Juego from './juego/juego';
// ? Components
import Portada from './components/top/portada';
import Experiencia from './components/top/experiencia';
import Mochila from './components/top/mochila';
import Nombre from './components/top/nombre';
import Editar from './components/top/editar';
import Esbirro from './components/top/esbirro';

import Consola from './components/mid/consola';

import Atributos from './components/bot/atributos';
import Equipamiento from './components/bot/equipamiento';
import ArmaBtn from './components/bot/armaBtn';
import AccionBtn from './components/bot/accionBtn';
import HabilidadBtn from './components/bot/habilidadBtn';

import EncabezadoSeccion from './components/encabezadoSeccion';

function App() {
    const juego = Juego.getInstance();
    // const [count, setCount] = useState(0)

    const personajeActual = juego.personajes[0]
    // const increse = (): boolean => {
    //   let out: boolean = false;

    //   if (count < 10) {
    //     setCount((count) => count + 1);
    //     out = true;
    //   } else out = false;

    //   return out;
    // }

    // const decrese = (): boolean => {
    //   let out: boolean = false;

    //   if (count > 0) {
    //     setCount((count) => count - 1);
    //     out = true;
    //   } else out = false;

    //   return out;
    // }

    return (
        <div className='contenedor'>
            {/* TOP */}
            <Portada image_url='vite.svg' />
            <Experiencia exp={0} />
            <Mochila />
            <Nombre nombre={personajeActual.nombre} />
            <Esbirro />
            <Editar />

            {/* MID */}
            <Consola conten={personajeActual.descripcion} />

            {/* BOT */}
            <EncabezadoSeccion nombre='atributos' />
            <Atributos atributos={personajeActual.atributos} />

            <EncabezadoSeccion nombre='equipo' />
            <Equipamiento equipo={[personajeActual.objeto1, personajeActual.objeto2, personajeActual.objeto3]} />

            <ArmaBtn slot={1} arma={personajeActual.arma1} />
            <ArmaBtn slot={2} arma={personajeActual.arma2} />

            <AccionBtn texto='accion' />

            <EncabezadoSeccion nombre='habilidades' />

            <HabilidadBtn slot={1} nombre='habilidad1' />
            <HabilidadBtn slot={2} nombre='habilidad2' />
            <HabilidadBtn slot={3} nombre='habilidad3' />

            {/* <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <div>Count is {count}</div>
            <button onClick={() => increse()}>
            Increse
            </button>
            <button onClick={() => decrese()}>
            Decrese
            </button>
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p> */}
        </div>
    )
}

export default App
