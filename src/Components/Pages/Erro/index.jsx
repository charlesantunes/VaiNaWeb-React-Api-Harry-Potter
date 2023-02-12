import React from "react";

import BarraMenu from '../../Menu/index'
import {Container} from './style'
import DK from '../../../Assents/DK.gif'


export default function ErrorFunc() {
    return(
        <>
            <BarraMenu />

            <Container>
                <h1>Página escolhida não existe</h1>
                 <img src={DK} alt="página de erro" /> 
                 <img src={DK} alt="página de erro" /> 
            </Container>
        </>
    )
}