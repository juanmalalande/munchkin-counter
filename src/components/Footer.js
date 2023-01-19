import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export const Footer = () => {
  return (

    <div className='footer'>
        <div className='row'>

            <div className='col'>
                <ul>
                    <li><p>Creado en React por <a href='mailto: juanmalalande@gmail.com'>Juan Manuel Lalande (2023)</a></p></li>
                </ul>
            </div>

            <div className='col'>
                <p>Munchkin: Creado por Steve Jackson y dibujado por John Kovalic</p>
            </div>

            <div className='col'>
                <p><a href='https://www.bureaudejuegos.com/productos/munchkin/'>Comprar Munchkin</a></p>
                <p><a href='https://www.MUNCHKIN.GAME/GAMEPLAY/FAQ'>Munchkin FAQ</a></p>
            </div>
            
        </div>
    </div>
  )
}
