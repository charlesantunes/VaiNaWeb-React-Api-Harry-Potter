import React, { useState } from 'react';
import axios from 'axios';

export default function Desenho() {

  const [input, setInput] = useState('')
  const [person, setPerson] = useState([])

let API = `https://rickandmortyapi.com/api/character/${input}`

//   const getAPI = () => {
//     axios.get(API).then( (res) => {
//         setPerson({
//         nome: res.data.name,
//         imagem: res.data.image
//       })
//     } )
//   }

const getAPI = () => {
    axios.get(API).then( (res) => {
        setPerson([{
        nome: res.data.name,
        imagem: res.data.image
      }])
      setInput("")
    } )
  }

  return (
    <>
      <input value={input} onChange={ (e) => {setInput(e.target.value)} }/>
      <button onClick={ () => {getAPI()} }>Click</button>
      <ul>{person.map((i)=>[
        <div>
          <li>{i.nome}</li>
          <img src={i.imagem} alt="imagem"/>
        </div>
      ])}
      </ul>

      {/* <h1>{person.nome}</h1>
      <img src={person.imagem} alt="imagem personagem"/> */}
    </>
  );
}