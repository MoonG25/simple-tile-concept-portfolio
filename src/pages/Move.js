import React from 'react';
import styled from 'styled-components';
import './Move.css';

// redux
import { connect } from 'react-redux';

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
    isRotate: false
  }

  handleChange = (e) => {
    const isBox = !this.state.isBox;
    const type = isBox ? "square" : "circle";
    this.setState({ isBox, type });
  }

  render() {
    const { type, isBox } = this.state;

    return (
      <ContainerComponent>
        <div>
          <RemoteController>
            <label htmlFor="box-type">
              <input type="checkbox" id="box-type" checked={isBox} onChange={this.handleChange}/>
              <span>square</span>
            </label>
          </RemoteController>
          <Divider />

          <GridContainer type="row">
            <GridSection description="300px 이동">
              <Box type={type} classes="rotate left-to-right__3s" />
            </GridSection>
            <GridSection description="300px 이동 2 step">
              <Box type={type} classes="left-to-right__3s_percent" />
            </GridSection>
            <GridSection description="끝까지 이동">
              <Box type={type} classes="left-to-right__3s_100percent" />
            </GridSection>
            <GridSection description="반대로 300px 이동">
              <Box type={type} classes="right-to-left__3s" />
            </GridSection>
          </GridContainer>

          <GridContainer type="column">
            <GridSection minHeight="360px" description="위에서 아래로 이동">
              <Box type={type} classes="up-to-down__3s" />
            </GridSection>
            <GridSection minHeight="360px" description="위에서 아래로 10 step">
              <Box type={type} classes="up-to-down__3s_percent" />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로">
              <Box type={type} classes="down-to-up__3s" />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로 10 step">
              <Box type={type} classes="down-to-up__3s_percent" />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로">
              <Box type={type} classes="down-to-up__3s" />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로">
              <Box type={type} classes="down-to-up__3s" />
            </GridSection>
            <GridSection minHeight="360px" description="아래서 위로">
              <Box type={type} classes="down-to-up__3s" />
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default MovePage;