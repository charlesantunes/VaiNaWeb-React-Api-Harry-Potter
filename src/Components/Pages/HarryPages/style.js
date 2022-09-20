import styled from "styled-components";
import Fundo from '../../../Assents/giphy.gif'

export const Container = styled.div`
background-image: URL(${Fundo});
background-attachment: fixed;
background-repeat: no-repeat;
background-size: 100% 100%;
flex-wrap: wrap;
//background-color: #999 ;
position: relative;
width:100%;
height:auto;
    h1{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 20px;
    }
    ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    div{
        background-color: #2f4f4f;
        opacity: 0.8;
        width: 296px;
        height: 485px;
        margin-top: 1.5vh;
        margin-bottom: 2.1vh;
        border: outset 1px Darkgray;
        border-width:5px;
        
    }
    div:hover{
        transition: all 1s;
        transform: scale(1.1);
        z-index: 99;
        opacity: 1;
    }

    li{
        font-family:'Henny Penny', cursive;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bolder;
        height: 6vh;
        color: white;
    }
    img{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    button{
        font-family:'Henny Penny', cursive;
        background-color: #2f4f4f;
        padding: 1vh 2vw;
        margin: 0 30%;
        border: outset 0.5px;
        
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        color: #fff;
        border-radius: 15px;
        box-shadow: 0 5px #999;
    }
    button:hover{
        background-color: #3e8e41
    }
    button:active {
  transform: translateY(4px);
}
    `

// export const Container = styled.section`
//     position: relative;
//     top:10vh;
//     width:100vw;
//     height:90vh;
//     background-color: #999;
//     display: flex;
//     justify-content:center;
//     align-items:center;
//     justify-content: space-around;
//     flex-wrap: wrap;
// `
// export const ContainerFS = styled.section`
//     position: relative;
//     top:10vh;
//     width:100%;
//     height:auto;
//     background-color: #999;
//     h1{
//         font-size: 2rem;
//         text-align: center;
//         margin-bottom: 20px;
//     }
//     ul{
//         display: flex;
//         justify-content: space-around;
//         flex-wrap: wrap;
//     }
//     div{
//         width: 20.6%;
//         height: 108vh;
//         margin-bottom: 2vh;
//         border: outset 1px Darkgray;
//         border-width:5px;
//     }
//     li{
//         text-align: center;
//         font-size: 1.2rem;
//         font-weight: bolder;
//         height: 6vh;
//     }
//     img{
//         width: 300px;
//     }
//     `