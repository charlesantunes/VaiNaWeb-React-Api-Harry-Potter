import React, { useEffect, useState } from "react";
import axios from "axios";

import BarraMenu from '../../Menu/index'
import * as S from './style';

export default function About() {
      const[hold,setHold] = useState;
    //  const[status, setStatus] = useState(false);

     const conexao = 'https://hp-api.onrender.com/api/spells'

     axios.get(conexao).then(response=>{
   //      setHold(response.data)
       console.log(response)
     })
      useEffect(()=>{

     },[hold])
    return(
        <>
            <BarraMenu />

            <S.Container>
                {/* <ul>{hold.map((i)=>(
                    <div>
                     <li>{i.name}</li>
                     <img src={i.image} alt={i.name} />
                     <button>Detalhes</button>
                    </div>
                    ))}
                </ul> */}
            </S.Container>
            {/* {status && sinopse */}
        </>
    )
}