import React, { Component } from 'react'
import styled from 'styled-components';
import logo from './bg.png';



const Bg = styled.div`
      height:25em;
      background-image: url(${logo});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin:auto;
      `;

const Title = styled.h1`
width:100%;
font-size:5em;
`;

const Button = styled.button`
color: #c4c4c4 ;
text-decoration: none;
background-color:#E50914;
border: none;
padding:1em;
padding-right:2em;
padding-left:2em;
font-weight:700;

`;
const Container = styled.div`
padding-top:5em;
vertical-align: middle;


`;
    

export class Healine extends Component {
    render() {
        return (
           <div>
              <Bg>
                <Container>  
                    
                <Title> NOW ON STREAM </Title>     
                   <Button>VIEW SHOWTIME</Button>
                   
                   </Container>
              

              </Bg>
                  
              
           </div>
        )
    }
}

export default Healine
