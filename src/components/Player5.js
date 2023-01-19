import React, { useState } from 'react'
import '../App.css';

export const Player5 = () => {
  
    const [nombre, setNombre] = useState('Humano')
    const [nivel, setNivel] = useState(1)
    const [bonus, setBonus] = useState(0)

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }





  return (
    <div className='player'>
        <input type= "text" onChange = {e => cambiarNombre(e.target.value)} placeholder='Ingresa tu nombre'/>
        <ul>
            <li className={nivel<=0 ? 'tachado': 'nada'}><h1><strong className={nivel<=0 ? 'rojo': 'nada'}>{nombre} </strong></h1></li>
            <li><strong>Nivel: {nivel} </strong> 
                <button onClick={() => setNivel(nivel + 1)}>Level up</button>
                <button onClick={() => setNivel(nivel - 1)}>Level down</button>
                <button onClick={() => setNivel(nivel === 1)}>Reset</button>
                </li>
            
            <li><strong>Bonus: {bonus} </strong>
                <button onClick={() => setBonus(bonus + 1)}>Bonus up</button>
                <button onClick={() => setBonus(bonus - 1)}>Bonus down</button>
                <button onClick={() => setBonus(bonus === 0)}>Reset</button>
                </li>
            <li><h2><strong>Total: {nivel + bonus}</strong></h2> </li>
        </ul>
    </div>
  )
}
