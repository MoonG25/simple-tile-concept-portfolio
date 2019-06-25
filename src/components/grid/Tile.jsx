import React from 'react';
import styled, {keyframes} from 'styled-components';

const expand = keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 10px;
`;

const Box = styled.div`
  border: 1px solid black;
  animation: ${expand} .3s linear;
`;

class GridTile extends React.Component {
  render() {
    const { children, wrapper } = this.props;
    return (
        wrapper ? (
          <Grid>
            {children}
          </Grid>
        ) : (
          <Box>
            {children}
          </Box>
        )
    )
  }
}

export default GridTile;