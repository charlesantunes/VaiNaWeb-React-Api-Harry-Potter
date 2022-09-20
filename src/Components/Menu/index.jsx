import React from "react";

import { Link } from 'react-router-dom'
import {Menu} from './style'

export default function BarraMenu() {
    return(
        <>           
          <Menu>
            <style>@import url('http://fonts.cdnfonts.com/css/harry-potter');</style>                
                 <ul>
                    <li><Link className="link" to="/"><spam>Home</spam></Link></li>
                    <li><Link className="link" to="/harry-potter">Personagens</Link></li>
                    <li><Link className="link" to="/sobre">Sobre</Link></li>
                </ul>
                
                    <input type="text" />
                    <button>Pesquisar</button>
                
          </Menu>
        </>
    )
}