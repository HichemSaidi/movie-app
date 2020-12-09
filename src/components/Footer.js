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
export class Footer extends Component {
    render() {
        return (
            <div>
                <Bg></Bg>
            </div>
        )
    }
}

export default Footer
