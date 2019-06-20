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
              <Box type={type} x={50} time={3} base1="left" isRotate={isRotate} />
            </GridSection>
            <GridSection description="left 50%, 3s, 10 step">
              <Box type={type} x={50} time={3} step={10} base1="left" isRotate={isRotate} />
            </GridSection>
            <GridSection description="left 100%, 3s">
              <Box type={type} x={100} time={3} base1="left" isRotate={isRotate} />
            </GridSection>
            <GridSection description="right 100%">
              <Box type={type} x={100} time={3} base1="right" isRotate={isRotate} />
            </GridSection>
          </GridContainer>

          <GridContainer type="column">
            <GridSection minHeight="360px" description="50%, 3s">
              <Box type={type} x={50} time={3} base1="top" isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="50%, 3s, 10 step">
              <Box type={type} x={50} time={3} base1="top" step={10} isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="50%, 3s, ease-in">
              <Box type={type} x={50} time={3} base1="bottom" isRotate={isRotate} bezier="ease-in"/>
            </GridSection>
            <GridSection minHeight="360px" description="50%, 3s, 10 step">
              <Box type={type} x={50} time={3} base1="bottom" step={10} isRotate={isRotate} />
            </GridSection>
            <GridSection minHeight="360px" description="ease-in-out">
              <Box type={type} x={100} time={3} base1="top" isRotate={isRotate} bezier="ease-in-out"/>
            </GridSection>
            <GridSection minHeight="360px" description="bezier(0.075, 0.82, 0.165, 1)">
              <Box type={type} x={100} time={3} base1="top" isRotate={isRotate} bezier={[0.075, 0.82, 0.165, 1]}/>
            </GridSection>
            <GridSection minHeight="360px" description="ease">
              <Box type={type} x={100} time={3} base1="top" isRotate={isRotate} bezier="ease" />
            </GridSection>
          </GridContainer>
      
          <GridContainer type="row" count={3}>
            <GridSection minHeight="180px" description="ease">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier="ease" />
            </GridSection>
            <GridSection minHeight="180px" description="ease-in">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier="ease-in" />
            </GridSection>
            <GridSection minHeight="180px" description="ease-in-out">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier="ease-in-out" />
            </GridSection>
            <GridSection minHeight="180px" description="ease-out">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier="ease-out" />
            </GridSection>
            <GridSection minHeight="180px" description="linear">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier="linear" />
            </GridSection>
            <GridSection minHeight="180px" description="custom bezier(0.123, 0.234, 0.345, 0.456)">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier={[0.123, 0.234, 0.345, 0.456]} />
            </GridSection>
            <GridSection minHeight="180px" description="ease-out bezier(0.075, 0.82, 0.165, 1)">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier={[0.075, 0.82, 0.165, 1]} />
            </GridSection>
            <GridSection minHeight="180px" description="ease-in bezier(0.47, 0, 0.745, 0.715)">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier={[0.47, 0, 0.745, 0.715]} />
            </GridSection>
            <GridSection minHeight="180px" description="ease-in-out bezier(0.77, 0, 0.175, 1)">
              <Box type={type} x={100} time={3} base1="left" base2="top" isRotate={isRotate} isDiagonal={true} bezier={[0.77, 0, 0.175, 1]} />
            </GridSection>
          </GridContainer>
        </div>
      </ContainerComponent>
    )
  }
}

export default MovePage;