import React, { useState } from 'react';
import '../App.css';

export const Player2 = () => {

  const [nombre, setNombre] = useState('Humano')
  const [nivel, setNivel] = useState(1)
  const [bonus, setBonus] = useState(0)

  const cambiarNombre = (nuevoNombre) => {
      setNombre(nuevoNombre);
  }





return (
  <div className='player'>
      <input type= "text" onChange = {e => cambiarNombre(e.target.value)}/>
      <ul>
          <li className={nivel<=0 ? 'tachado': 'nada'}>Nombre: <strong className={nivel<=0 ? 'rojo': 'nada'}>{nombre} </strong></li>
          <li>Nivel: {nivel} </li>
              <button onClick={() => setNivel(nivel + 1)}>Subir nivel</button>
              <button onClick={() => setNivel(nivel - 1)}>Bajar nivel</button>
              <button onClick={() => setNivel(nivel === 1)}>Resetear nivel</button>
          
          <li>Bonus: {bonus} </li>
              <button onClick={() => setBonus(bonus + 1)}>Subir bonus</button>
              <button onClick={() => setBonus(bonus - 1)}>Bajar bonus</button>
              <button onClick={() => setBonus(bonus === 0)}>Resetear bonus</button>
          <li>Total: {nivel + bonus} </li>
      </ul>
  </div>
)
}
