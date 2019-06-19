import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const move = (base, x, rotate) => keyframes`
  from {
    ${base}: 0;
    ${rotate ? `transform: rotate(0deg)` : ''};
  }
  to {
    ${base}: calc(${x}% - 25px);
    ${rotate ? `transform: rotate(359deg)` : ''};
  }
`;

const SquareBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: circle(0% 0%, 100% 0%, 0% 100%, 100% 100%);
  animation: ${props => props.x ? move(props.base, props.x, props.isRotate) : 'none'} ${props => props.time}s infinite alternate;
  ${props => props.step ? `animation-timing-function: steps(${props.step}, end)` : ''}
`;

const CircleBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: circle(50% at 50% 50%);
  animation: ${props => props.x ? move(props.base, props.x, props.isRotate) : 'none'} ${props => props.time}s infinite alternate;
  ${props => props.step ? `animation-timing-function: steps(${props.step}, end)` : ''}
`;

const TriangleBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  animation: ${props => props.x ? move(props.base, props.x, props.isRotate) : 'none'} ${props => props.time}s infinite alternate;
  ${props => props.step ? `animation-timing-function: steps(${props.step}, end)` : ''}
`;

class Box extends React.Component {
  render() {
    const { type, classes, x, time, step, base, isRotate } = this.props;
    return (
      <React.Fragment>
        {
          (() => {
            switch (type) {
              case 'square': return <SquareBox x={x} time={time} step={step} base={base} isRotate={isRotate} />;
              case 'circle': return <CircleBox x={x} time={time} step={step} base={base} isRotate={isRotate} />;
              case 'triangle': return <TriangleBox x={x} time={time} step={step} base={base} isRotate={isRotate} />;
              default: return <SquareBox x={x} time={time} step={step} base={base} isRotate={isRotate} />;
            }
          })()
        }
      </React.Fragment>
    )
  }
}

Box.propTypes = {
  type: PropTypes.string,
};

export default Box;