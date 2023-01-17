import React, { useState } from 'react';
import { Player } from './Player';
import { Player2 } from './Player2';
import { Player3 } from './Player3';
import { Player4 } from './Player4';

export const AddPlayer = () => {
    
    const [jugador, setJugador] = useState(false);
    const [jugador2, setJugador2] = useState(false);
    const [jugador3, setJugador3] = useState(false);
    const [jugador4, setJugador4] = useState(false);

    const handleClick = () => {
        setJugador(true);
    }

    const handleClick2 = () => {
        setJugador2(true);
    }

    const handleClick3 = () => {
        setJugador3(true);
    }

    const handleClick4 = () => {
        setJugador4(true);
    }
    
  
    return (
    <div>
        <button onClick={handleClick}>Agrega un jugador!</button>
        {jugador && <Player />}

        <button onClick={handleClick2}>Agrega un jugador!</button>
        {jugador2 && <Player2 />}

      
        <button onClick={handleClick3}>Agrega un jugador!</button>
        {jugador3 && <Player3 />}
   
        <button onClick={handleClick4}>Agrega un jugador!</button>
        {jugador4 && <Player4 />}
    </div>
  )
}
