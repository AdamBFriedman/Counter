import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
cursor: pointer;
font-size: 1em;
border: 2px solid #818787;
border-radius: 50%;
background: #2B3636;
color: #818787;
text-align: center;
float: left;
position: relative;
top: 38%;
left: 70%;
`;


export default class Button2 extends Component {
    render(props){
        let { title, task } = this.props
        return(
            
            <StyledButton onClick = { task }>{ title }</StyledButton>

        )
    }
}