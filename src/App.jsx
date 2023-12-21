import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import { Caja, Carta, ColorCard } from './components'

function App() {
  const colorCards = [
    {
      likes: 500, 
      date: '3 days ago',
      colors: ['#FFECD6', '#4CB9E7', '#3559E0', '#0F2167'],
      id: uuidv4()
    },
    {
      likes: 300, 
      date: '2 days ago',
      colors: ['#FFECD6', '#4CB9E7', '#3559E0', '#0F2167'],
      id: uuidv4()
    },
    {
      likes: 200, 
      date: '1 days ago',
      colors: ['#FFECD6', '#4CB9E7', '#3559E0', '#0F2167'],
      id: uuidv4()
    }
  ] 
  console.log(colorCards)
  let nombre =  'pepe'
  return (
    <div>
      <Carta nombre='auto lindo' precio={'4000'} img={'/images/auto-humilde.jpg'}/> {/* llamamos al componente carta */}
      <Carta nombre='auto feo' precio='2000' img={'/images/auto-humilde.jpg'}/>
      <Caja/>

      {colorCards.map(colorCard => <ColorCard  {...colorCard} key={colorCard.id}/> )}

    </div>
 
  )
}

export default App


/* Van a hacer una carta de un ecommerce con una imagen abajo un precio descripcion y hace cuantos dias se publico la noticia */

/* 
DRY = dont repeat yourself

YAGNI = you arent gonna need it

KISS = keep it simple stupid



[1, 2, 3, 4, 5]

for(let i = 0; i < arr.lenght; i++){
  console.log(arr[i])
}

for(let number of arr){
  console.log(number)
}

arr.forEach(number => console.log(number))
*/



/* 
Hacer que nuestra carta de producto sea un componente
*/

/* 
Pasar las props a nuestro componente:
nombre, precio, imagen, mensaje de fecha
*/

