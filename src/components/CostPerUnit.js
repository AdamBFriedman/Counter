import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const UnitCost = styled.section`
background: #1DC090;
font-size: 14px;
font-weight: 600;
filter: blur(0.5px);
width: 160px;
height: 44%;
position: relative;
top: 28%;
display: flex;
justify-content: flex-start;
padding: 5px 0 0 10px;
`;

const Title = styled.h1`
color: white;
position: absolute;
font-size: 30px;
`;


export default class CostPerUnit extends Component {
    render(props){
        let { unit } = this.props
        return(
            <div>
            <UnitCost>COST PER UNIT
            <Title>${ unit } </Title>
            </UnitCost>
            
            </div>
        )
    }
}