import React from 'react';
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';

// components
import ContainerComponent from '../components/Container';

const Flex = styled.div`
  float: left;
  margin-right: 20px;
  margin-bottom: 30px;
  
  &:nth-of-type(3),
  &:nth-of-type(6) {
    clear: both;
  }
`;

const FlexBox = styled.div`
  display: flex;
  border: 3px dashed gray;
  width: 300px;
  height: 200px;

  &.d-col {
    flex-direction: column;
  }

  &.a-start {
    align-items: flex-start;
  }

  &.a-center {
    align-items: center;
  }

  &.a-end {
    align-items: flex-end;
  }

  &.j-start {
    justify-content: flex-start;
  }

  &.j-center {
    justify-content: center;
  }

  &.j-end {
    justify-content: flex-end;
  }

  &.j-space-around {
    justify-content: space-around;
  }

  &.j-space-between {
    justify-content: space-between;
  }

  &.j-space-evenly {
    justify-content: space-evenly;
  }
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #ed4c67;
  background-color: #c4e538;
`;

const H2 = styled.h2`
  font-size: 20px;
`;

class FlexPage extends React.Component {
  render() {
    return (
      <ContainerComponent>
        <main>
          <h1>FlexBox</h1>
          <a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90" target="_blank">flexbox 참고 사이트 </a>
          <hr />
          <Flex>
            <H2>flex : direction-row</H2>
            <FlexBox>
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>flex : direction-column</H2>
            <FlexBox className="d-col">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>align-items : flex-start</H2>
            <FlexBox className="a-start">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>align-items: center</H2>
            <FlexBox className="a-center">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>align-items: flex-end</H2>
            <FlexBox className="a-end">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>justify-content: flex-start</H2>
            <FlexBox className="j-start">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>justify-content: center</H2>
            <FlexBox className="j-center">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>justify-content: flex-end</H2>
            <FlexBox className="j-end">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>justify-content: space-around</H2>
            <FlexBox className="j-space-around">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>justify-content: space-between</H2>
            <FlexBox className="j-space-between">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>

          <Flex>
            <H2>justify-content: space-evenly</H2>
            <FlexBox className="j-space-evenly">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </FlexBox>
          </Flex>
        </main>
      </ContainerComponent>
    )
  }
}

export default FlexPage;