import React, { Component } from 'react';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import CostPerUnit from './components/CostPerUnit';
import TotalCost from './components/TotalCost';
import styled, { css } from 'styled-components';



const Wrapper = styled.section`
  width: 680px;
  height: 500px;
  background: #E0F4F4;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DarkBox = styled.section`
background: #2B3636;
width: 100%;
max-width: 600px;
height: 40%;
margin: 0px 40px;
position: relative;
top: 30%;
display: flex;
box-shadow: 10px 20px 20px 0 rgba(0, 0, 0, 0.2), 10px 20px 20px 0 rgba(0, 0, 0, 0.19);
`;

const H2 = styled.section`
color: #8FA1A1;
filter: blur(0.5px);
font-size: 14px;
font-weight: bold;
text-align: center;
word-spacing: 2px;
position: relative;
top: 32%;
left: 100%;
`;

const Form = styled.section`
position: relative;
top: 45%;
left: 3%;
`;

class App extends Component {
  constructor(props){
    super();
    this.state = {
      count: 0,
      costPerUnit: 175.50,
    };
  }

  handleChange = (event) => {
    this.setState({
      count: event.target.value
    })
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  decreaseCounter = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    let { count } = this.state
    let { costPerUnit } = this.state
    let totalCost = costPerUnit * count
    return (
      <Wrapper>
        <DarkBox>
          <CostPerUnit 
            unit = { costPerUnit.toFixed(2) }
          />
          <div>
          <H2># OF UNITS</H2>
           <Button1 
            title = { "-" }
            task = { this.decreaseCounter }
           />
           <Button2
            title = { "+" }
            task = { this.increaseCounter } 
           />
           </div>
           <TotalCost 
            total = { Math.trunc(totalCost) }
            />
           <Form>
            <input
              value = { this.state.count }
              size = "4"
              type = "text"
              onChange = { this.handleChange }
              placeholder = "0"
            />
           </Form>
        </DarkBox>
      </Wrapper>
    );
  }
}

export default App;

