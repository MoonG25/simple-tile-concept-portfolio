import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RowContainer = styled.div`
  display: grid;
  grid-gap: 12px;
  margin: 12px 0;
  grid-template-columns: repeat(${props => props.count ? props.count : 1}, 1fr);
`;

const ColumnContainer = styled.div`
  display: grid;
  grid-gap: 12px;
  margin: 12px 0;
  grid-auto-flow: column;
  grid-template-rows: repeat(${props => props.count ? props.count : 1}, 1fr);
  grid-auto-columns: 1fr;
`

const NNContainer = styled.div`
  display: grid;
  grid-gap: 12px;
  margin: 12px 0;
  grid-template: repeat(${props => props.count ? props.count : 1}, 1fr) / repeat(${props => props.count ? props.count : 1}, 1fr);
`;

class GridContainer extends React.Component {
  render() {
    const { type, count, children } = this.props;
    const renderContainer = type === 'row' ? <RowContainer count={count}>{children}</RowContainer>
      : type === 'column' ? <ColumnContainer count={count}>{children}</ColumnContainer>
      : <NNContainer count={count}>{children}</NNContainer>
      
    return (
      <React.Fragment>
        {renderContainer}
      </React.Fragment>
    )
  }
}

GridContainer.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number
};

export default GridContainer;