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

const roundMove = (isRotate, isScale, isTransform) => keyframes`
  0% {
    left: 0;
    top: 0;
    ${isTransform ? `transform: ${isRotate ? 'rotate(0deg)' : ''}` : ''};
  }
  25% {
    left: calc(100% - 25px);
    top: 0;
  }
  50% {
    left: calc(100% - 25px);
    top: calc(100% - 25px);
  }
  75% {
    left: 0;
    top: calc(100% - 25px);
  }
  100% {
    left: 0;
    top: 0;
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

  getAnimation(x, base1, base2, bezier, time, isRotate, isDiagonal, isScale, isRound) {
    if (isRound) {
      return css`${roundMove(isRotate, isScale, isRotate | isScale)} ${time}s ${bezier} infinite`;
    }
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
      case 'star': return 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
      case 'pentagon': return 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
      case 'hexagon': return 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
      case 'heptagon': return 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)';
      case 'custom': return 'polygon(40% 11%, 31% 17%, 33% 31%, 45% 31%, 52% 23%, 48% 14%, 41% 42%, 33% 56%, 53% 52%, 42% 63%, 52% 69%, 44% 76%, 49% 94%)';
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

  render() {
    const { type, x, base1, base2, bezier, time, step, isRotate, isDiagonal, isScale, isRound } = this.props;
    const clipPath = this.getClipPath(type);
    const cubicBezier = this.getCubicBezier(bezier);
    const animation = this.getAnimation(x, base1, base2, cubicBezier, time, isRotate, isDiagonal, isScale, isRound);
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