import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

// redux

// components
import ContainerComponent from '../components/Container';
import GridTile from '../components/grid/Tile';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(150px, auto);
`;

const CustomGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: ${props => props.gap}px;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  grid-auto-rows: minmax(${props => props.row}px, auto);
`;

class GridPage extends React.Component {
  state = {
    checked: false,
    grid: {
      gap: 0,
      column: 2,
      row: 150,
    },
    list: [],
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  }

  handleGridChange = name => (event, value) => {
    const { grid } = this.state;
    grid[name] = value === '' ? '' : Number(value);
    console.log(grid[name])
    this.setState({ grid });
  }

  addBox = () => {
    const { list } = this.state;
    this.setState({
      list: [...list, 1]
    });
  }

  deleteBox = () => {
    const { list } = this.state;
    list.pop();
    this.setState({
      list
    });
  }

  render() {
    const { checked, grid, list } = this.state;
    const renderGrid = checked ? (
      <React.Fragment>
        <div>
          <Button variant="contained" color="primary" onClick={this.addBox}>
            <Icon>add</Icon> Add
          </Button>
          <Button variant="contained" color="secondary" onClick={this.deleteBox}>
            <Icon>delete</Icon> Delete
          </Button>
          <Typography id="grid-gap" gutterBottom>
            Gap
          </Typography>
          <Slider
            value={typeof grid.gap === 'number' ? grid.gap : 0}
            valueLabelDisplay="auto"
            onChange={this.handleGridChange('gap')}
            step={1}
            min={0}
            max={100}
          />
          <Typography id="grid-column" gutterBottom>
            Column
          </Typography>
          <Slider
            value={typeof grid.column === 'number' ? grid.column : 0}
            valueLabelDisplay="auto"
            onChange={this.handleGridChange('column')}
            step={1}
            min={0}
            max={10}
          />
          <Typography id="grid-row" gutterBottom>
            Row
          </Typography>
          <Slider
            value={typeof grid.row === 'number' ? grid.row : 0}
            valueLabelDisplay="auto"
            onChange={this.handleGridChange('row')}
            step={1}
            min={0}
            max={300}
          />
        </div>
        <CustomGrid gap={grid.gap} column={grid.column} row={grid.row}>
          {
            list.map((item, index) => <GridTile key={index} />)
          }
        </CustomGrid>
      </React.Fragment>
    ) : (
      <Grid>
        <GridTile />
        <GridTile />
        <GridTile />
        <GridTile />

        <GridTile />
        <GridTile />
        <GridTile />
        <GridTile />

        <GridTile wrapper={true}>
          <GridTile />
          <GridTile />
          <GridTile />
          <GridTile />
        </GridTile>

        <GridTile />
        <GridTile />
        <GridTile />
        <GridTile />

        <GridTile wrapper={true}>
          <GridTile />
          <GridTile />
        </GridTile>
      </Grid>
    );
    return (
      <ContainerComponent>
        <main>
          <h1>Grid <Switch checked={checked} onChange={this.handleChange('checked')} value="checked" color="primary" /></h1>
          <a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout" target="_blank">grid 참고 사이트 </a>
          <hr />
          {renderGrid}
        </main>
      </ContainerComponent>
    )
  }
}

export default GridPage;