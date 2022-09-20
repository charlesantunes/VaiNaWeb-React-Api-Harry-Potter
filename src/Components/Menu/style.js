import styled from "styled-components"

export const Menu = styled.div`
    position: relative;
    top: 0;
    background-color: #2f4f4f;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
        width: 70%;
        display: flex;
        justify-content: space-evenly;
    }
    li{
        font-size: 1.5rem;
    }
    .link{
        text-decoration: none;
        color: white;       
    }
    .link:hover{
        text-decoration: underline;
    }
    li:hover{
        text-decoration: none;
        transition: all 1s;
        transform: scale(1.2);
        text-decoration: dotted;
    }
    
    button{
        background-color: #2f4f4f;
        padding: 1.3vh 2vw;
        border: outset 0.5px;
        font-size: 1.1rem;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        color: #fff;
        border-radius: 10px;
    }
    button:hover{
        background-color: #3e8e41
    }
    button:active {
  transform: translateY(4px);
}
    input{
        font-family:'Henny Penny', cursive;
        height: 6vh;
        border-radius: 10px;
        margin-right: 0.5rem;
        outline: 0;
        font-size: 1rem;
        font-weight: bolder;
    }
    `