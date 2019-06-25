import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  padding: 15px 35px;
  border-radius 100px;
  outline: none;
  background-color: rgba(223, 98, 54, 0.8);
  color: white;
  font-family: "Roboto Mono", monospace;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 12px;
  transition: background-color .3s, color .3s, border .3s;
  letter-spacing: 1px;

  &:hover {
    background-color: rgba(223, 98, 54, 0);
    color: rgba(223, 98, 54, 0.8);
    border: 1px solid rgba(223, 98, 54, 0.8);
  }
`;

const Button2 = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 15px 35px;
  border-radius: 100px;
  font-family: "Roboto Mono", monospace;
  text-transform: uppercase;
  color: white;
  font-size: 12px;
  background-color: rgba(223, 98, 54, 0.8);
  border: 1px solid transparent;
  font-weight: 300;
  transition: background-color .3s, color .3s, border .3s;
  letter-spacing: 1px;
  position: relative;

  &:hover {
    background-color: rgba(223, 98, 54, 0);
    text-decoration: none;
    color: rgba(223, 98, 54, 0.8);
    border: 1px solid rgba(223, 98, 54, 0.8);
  }
`;

class EffectButton extends React.Component {
  state = {
    text: '',
  };

  effect(text) {
    
  }

  render() {
    const { children } = this.props;
    const text = typeof children === 'string' ? children : 'button';
    return (
      <Button onClick={effect}>
        {text}
      </Button>
    )
  }
}

EffectButton.propTypes = {
  text: PropTypes.string,
};

export default EffectButton;