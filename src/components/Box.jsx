import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SquareBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: circle(0% 0%, 100% 0%, 0% 100%, 100% 100%);
`;

const CircleBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: circle(50% at 50% 50%);
`;

const TriangleBox = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #123456;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const PentagonBox = styled.div`

`;

class Box extends React.Component {
  render() {
    const { type, classes } = this.props;
    return (
      <React.Fragment>
        {
          (() => {
            switch (type) {
              case 'square': return <SquareBox className={classes} />;
              case 'circle': return <CircleBox className={classes} />;
              case 'triangle': return <TriangleBox className={classes} />;
              default: return <SquareBox className={classes} />;
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