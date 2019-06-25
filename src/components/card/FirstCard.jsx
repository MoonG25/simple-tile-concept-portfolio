import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const Container = styled.div`
  display: 
`;

class FirstCard extends React.Component {
  render() {
    const { children, src, text } = this.props;
    const imgSrc = src | 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80';
    
    return (
      <Container>
        FirstCard
      </Container>
    )
  }
}

FirstCard.propTypes = {
  src: PropTypes.string,
};

export default FirstCard;