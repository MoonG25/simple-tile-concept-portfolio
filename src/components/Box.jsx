import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

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

const CommonBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: ${props => props.clipPath};
  animation: ${props => props.animation};
  ${props => props.timing};
`;
// ${props => props.x ? move(props.base, props.x, props.isRotate) : 'none'} ${props => props.time}s infinite alternate
class Box extends React.Component {
  getClipPath(type) {
    switch (type) {
      case 'square': return 'circle(0% 0%, 100% 0%, 0% 100%, 100% 100%)';
      case 'circle': return 'circle(50% at 50% 50%)';
      case 'triangle': return 'polygon(50% 0%, 0% 100%, 100% 100%)';
      default: return 'circle(0% 0%, 100% 0%, 0% 100%, 100% 100%)'
    }
  }

  getAnimation(x, base, time, isRotate) {
    if (x) {
      return css`${move(base, x, isRotate)} ${time}s infinite alternate`;
    } else {
      return false;
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
    const { type, x, base, time, step, isRotate } = this.props;
    const clipPath = this.getClipPath(type);
    const animation = this.getAnimation(x, base, time, isRotate);
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
};

export default Box;