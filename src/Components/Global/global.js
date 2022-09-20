import { createGlobalStyle } from 'styled-components'

<style>@import url('http://fonts.cdnfonts.com/css/harry-potter');</style>
                
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Harry Potter', sans-serif;
    //font-family:'Henny Penny', cursive;
    //font-family: 'Lato', sans-serif;
	line-height: 1;
}
`