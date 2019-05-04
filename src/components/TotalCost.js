import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Total = styled.section`
background: #AF74E3;
font-size: 14px;
font-weight: 600;
filter: blur(0.5px);
width: 160px;
height: 44%;
position: absolute;
top: 28%;
right: 0;
display: flex;
justify-content: flex-start;
padding: 5px 0 0 10px;
`;

const Title = styled.h1`
color: white;
position: absolute;
font-size: 30px;
`;

export default class TotalCost extends Component {
    render(props){
        let { total } = this.props
        return(
            <Total>TOTAL COST
                <Title>${ total }</Title>
            </Total>
        )
    }
}