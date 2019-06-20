import React from 'react';
import styled from 'styled-components';
import './Move.css';

// redux

// components
import ContainerComponent from '../components/Container';
import GridContainer from '../components/grid/Container';
import GridSection from '../components/grid/Section';
import Box from '../components/Box';

const RemoteController = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: #123456
  color: white;
  z-index: 2;
  border-radius: 3px;
`;

const Divider = styled.div`
  height: 50px;
`;

class MovePage extends React.Component {

  state = {
    type: "square",
    isBox: true,
    isRotate: false,
  }

  handleChange = (e) => {
    const name = e.target.name;
    const changedState = !this.state[name];
    const type = (name !== 'isBox') ? this.state.type : (changedState) ? "square" : "circle";
    this.setState({
      [name]: changedState,
      type
    });
    console.log(name, changedState)
  }

  render() {
    const { type, isBox, isRotate } = this.state;

    return (
      <ContainerComponent>
        <div>
          <RemoteController>
            <label htmlFor="shape">
              <input type="checkbox" id="shape" name="isBox" checked={isBox} onChange={this.handleChange}/>
              <span>square</span>
            </label>
            <label htmlFor="rotate">
              <input type="checkbox" id="rotate" name="isRotate" checked={isRotate} onChange={this.handleChange}/>
              <span>rotate</span>
            </label>
          </RemoteController>
          <Divider />

          <GridContainer type="row">
            <GridSection description="left 50%, 3s">
              <Box type={type} x={50} time={3} base="left" isRotate={isRotate} />
            </GridSection>
            <GridSection description="left 50%, 3s, 10 step">
              <Box type={type} x={50} time={3} step={10} base="left" isRotate={isRotate} />
            </GridSection>
            <GridSection description="left 100%, 3s">
              <Box type={type} x={100} time={3} base="left" isRotate={isRotate} />
            </GridSection>
            <GridSection description="right 100%">
              <Box type={type} x={100} time={3} base="right" isRotate={isRotate} />
            </GridSection>
          </GridContainer>

          <GridContainer type="column">
            <GridSection minHeight="360px" description="top 50%, 3s">
              <Box type={type} x={50} time={3} base="top" isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="top 50%, 3s, 10 step">
              <Box type={type} x={50} time={3} base="top" step={10} isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="bottom 50%, 3s">
              <Box type={type} x={50} time={3} base="bottom" isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="bottom 50%, 3s, 10 step">
              <Box type={type} x={50} time={3} base="bottom" step={10} isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로">
              <Box type={type} x={50} time={3} base="top" isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로">
              <Box type={type} x={50} time={3} base="top" isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로">
              <Box type={type} x={50} time={3} base="top" isRotate={isRotate} />
            </GridSection>
          </GridContainer>
      
          <GridContainer type="row" count={3}>
            <GridSection description="ease">
              <Box type={type} classes="left-up-right-down__3s-ease" />
            </GridSection>
            <GridSection description="ease-in">
              <Box type={type} classes="left-up-right-down__3s-ease-in" />
            </GridSection>
            <GridSection description="ease-in-out">
              <Box type={type} classes="left-up-right-down__3s-ease-in-out" />
            </GridSection>
            <GridSection description="ease-out">
              <Box type={type} classes="left-up-right-down__3s-ease-out" />
            </GridSection>
            <GridSection description="linear">
              <Box type={type} classes="left-up-right-down__3s-linear" />
            </GridSection>
            <GridSection description="custom cubic">
              <Box type={type} classes="left-up-right-down__3s-custom-cubic" />
            </GridSection>
            <GridSection description="ease-out cubic">
              <Box type={type} classes="left-up-right-down__3s-ease-out-cubic" />
            </GridSection>
            <GridSection description="ease-in cubic">
              <Box type={type} classes="left-up-right-down__3s-ease-in-cubic" />
            </GridSection>
            <GridSection description="ease-in-out cubic">
              <Box type={type} classes="left-up-right-down__3s-ease-in-out-cubic" />
            </GridSection>
          </GridContainer>
        </div>
      </ContainerComponent>
    )
  }
}

export default MovePage;