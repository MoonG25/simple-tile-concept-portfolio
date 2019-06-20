import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #123456;
  border-radius: 5px;
`;
const Description = styled.div`
  width: 100%;
  color: #123456;
  padding: 5px;
`;
const Content = styled.div`
  position: relative;
  width: 100%;
  min-height: ${props => props.minHeight ? props.minHeight : '50px'};
  padding: 5px;
  display: flex;
  justify-content: center;
`;

class GridSection extends React.Component {
  render() {
    const { description, minHeight, children } = this.props;
    return (
      <Container>
        <Description>
          {description ? description : '설명'}
        </Description>
        <Content minHeight={minHeight}>
          {children}
        </Content>
      </Container>
    )
  }
}

GridSection.propTypes = {
  description: PropTypes.string,
  minHeight: PropTypes.string,
};

export default GridSection;