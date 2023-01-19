import React, { useState } from 'react';
import { Player } from './Player';
import { Player2 } from './Player2';
import { Player3 } from './Player3';
import { Player4 } from './Player4';
import { Player5 } from './Player5';
import { Player6 } from './Player6';
// import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddPlayer = () => {
    
    const [jugador, setJugador] = useState(false);
    const [jugador2, setJugador2] = useState(false);
    const [jugador3, setJugador3] = useState(false);
    const [jugador4, setJugador4] = useState(false);
    const [jugador5, setJugador5] = useState(false);
    const [jugador6, setJugador6] = useState(false);
    const [boton, setBoton] = useState(false);
    const [boton2, setBoton2] = useState(false);
    const [boton3, setBoton3] = useState(false);
    const [boton4, setBoton4] = useState(false);
    const [boton5, setBoton5] = useState(false);
    const [boton6, setBoton6] = useState(false);
    

    const handleClick = () => {
        setJugador(true);
        setBoton(!boton);
    }

    const handleClick2 = () => {
        setJugador2(true);
        setBoton2(!boton2);
    }

    const handleClick3 = () => {
        setJugador3(true);
        setBoton3(!boton3);
    }

    const handleClick4 = () => {
        setJugador4(true);
        setBoton4(!boton4);
    }    
    
    const handleClick5 = () => {
        setJugador5(true);
        setBoton5(!boton5);
    } 

    const handleClick6 = () => {
        setJugador6(true);
        setBoton6(!boton6);
    } 
  
    return (
    <div className='container'>
        
        <div className='row'>

            <div className='col'>
                <button onClick={handleClick}>Agregar / Quitar jugador</button>
                {jugador && boton && <Player />}
            </div>
       
            <div className='col'>
                <button onClick={handleClick2}>Agregar / Quitar jugador</button>
                {jugador2 && boton2 && <Player2 />}
            </div>
            
            <div className='col'>
                <button onClick={handleClick3}>Agregar / Quitar jugador</button>
                {jugador3 && boton3 && <Player3 />}
            </div>    

            <div class="w-100"></div>
   
            <div className='col'>
                <button onClick={handleClick4}>Agregar / Quitar jugador</button>
                {jugador4 && boton4 && <Player4 />}
            </div>

            <div className='col'>
                <button onClick={handleClick5}>Agregar / Quitar jugador</button>
                {jugador5 && boton5 && <Player5 />}
            </div>

            <div className='col'>
                <button onClick={handleClick6}>Agregar / Quitar jugador</button>
                {jugador6 && boton6 && <Player6 />}
            </div>

        </div>
    </div>
  )
}
