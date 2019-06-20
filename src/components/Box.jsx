import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const move = (base1, x, isRotate, isScale, isTransform) => keyframes`
  from {
    ${base1}: 0;
    ${isTransform ? `transform: ${isRotate ? 'rotate(0deg)' : ''}` : ''};
  }
  to {
    ${base1}: calc(${x}% - 25px);
    ${isTransform ? `transform: ${isRotate ? 'rotate(360deg)' : ''} ${isScale ? 'scale(1.5)' : ''}` : ''};
  }
`;

const diagonalMove = (base1, base2, x, isRotate, isScale, isTransform) => keyframes`
  from {
    ${base1}: 0;
    ${base2}: 0;
    ${isTransform ? `transform: ${isRotate ? 'rotate(0deg)' : ''}` : ''};
  }
  to {
    ${base1}: calc(${x}% - 25px);
    ${base2}: calc(${x}% - 25px);
    ${isTransform ? `transform: ${isRotate ? 'rotate(360deg)' : ''} ${isScale ? 'scale(1.5)' : ''}` : ''};
  }
`;

const CommonBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: ${props => props.clipPath};
  animation: ${props => props.animation};
  ${props => props.timing};
`;
class Box extends React.Component {

  getAnimation(x, base1, base2, bezier, time, isRotate, isDiagonal, isScale) {
    if (x) {
      const animation = isDiagonal 
        ? css`${diagonalMove(base1, base2, x, isRotate, isScale, isRotate | isScale)} ${time}s ${bezier} infinite alternate`
        : css`${move(base1, x, isRotate, isScale, isRotate | isScale)} ${time}s ${bezier} infinite alternate`;
      return animation;
    } else {
      return false;
    }
  }

  getCubicBezier(cubic) {
    if (typeof cubic === 'object' && cubic.constructor === Array && cubic.length === 4) {
      return `cubic-bezier(${cubic.join(',')})`;
    } else if (typeof cubic === 'string' && cubic.constructor === String) {
      switch(cubic) {
        case 'ease': return 'ease';
        case 'ease-in': return 'ease-in';
        case 'ease-out': return 'ease-out';
        case 'ease-in-out': return 'ease-in-out';
        case 'linear': return 'linear';
        default: return 'ease';
      }
    } else {
      return 'ease';
    }
  }

  getClipPath(type) {
    switch (type) {
      case 'square': return 'circle(0% 0%, 100% 0%, 0% 100%, 100% 100%)';
      case 'circle': return 'circle(50% at 50% 50%)';
      case 'triangle': return 'polygon(50% 0%, 0% 100%, 100% 100%)';
      default: return 'circle(0% 0%, 100% 0%, 0% 100%, 100% 100%)'
    }
  }

  getTiming(step) {
    if (step) {
      return `animation-timing-function: steps(${step}, end)`;
    } else {
      return false;
    }
  }

  getTransform(isRotate, isScale) {

  }

  render() {
    const { type, x, base1, base2, bezier, time, step, isRotate, isDiagonal, isScale } = this.props;
    const clipPath = this.getClipPath(type);
    const cubicBezier = this.getCubicBezier(bezier);
    const animation = this.getAnimation(x, base1, base2, cubicBezier, time, isRotate, isDiagonal, isScale);
    const timing = this.getTiming(step);
    return (
      <React.Fragment>
        <CommonBox clipPath={clipPath} animation={animation} timing={timing} />
      </React.Fragment>
    )
  }
}

Box.propTypes = {
  type: PropTypes.string,
  base1: PropTypes.string,
  base2: PropTypes.string,
  x: PropTypes.number,
  time: PropTypes.number,
  step: PropTypes.number,
  isRotate: PropTypes.bool,
  isDiagonal: PropTypes.bool,
};

export default Box;