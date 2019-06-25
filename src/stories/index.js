import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { EffectButton } from '../components/button';
import GridContainer from '../components/grid/Container';
import GridSection from '../components/grid/Section';
import Box from '../components/Box';
import { brown } from '@material-ui/core/colors';

// story
const btnStories = storiesOf('Button', module);
const boxStories = storiesOf('Box', module);

// test style
const containerClass = {
  height: '100%',
  width: '100%',
  backgroundColor: brown
};

// component
btnStories.add('Effect', () => (
  <div className={containerClass}>
    <EffectButton onClick={action('clicked')}>
      Effect Button
    </EffectButton>
  </div>
));

boxStories.add('ease', () => (
  <GridContainer type="row" count={3}>
    <GridSection minHeight="180px" description="ease">
      <Box type="square" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="circle" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="star" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="pentagon" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="hexagon" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="heptagon" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease">
      <Box type="custom" x={100} time={2} base1="left" bezier="ease" isRotate={true} isScale={true} />
    </GridSection>
  </GridContainer>
));

boxStories.add('ease-in', () => (
  <GridContainer type="row" count={3}>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="square" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="circle" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="star" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="pentagon" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="hexagon" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="heptagon" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in">
      <Box type="custom" x={100} time={2} base1="left" bezier="ease-in" isRotate={true} isScale={true} />
    </GridSection>
  </GridContainer>
));

boxStories.add('ease-out', () => (
  <GridContainer type="row" count={3}>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="square" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="circle" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="star" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="pentagon" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="hexagon" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="heptagon" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-out">
      <Box type="custom" x={100} time={2} base1="left" bezier="ease-out" isRotate={true} isScale={true} />
    </GridSection>
  </GridContainer>
));

boxStories.add('ease-in-out', () => (
  <GridContainer type="row" count={3}>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="square" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="circle" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="triangle" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="star" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="pentagon" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="hexagon" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="heptagon" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
    <GridSection minHeight="180px" description="ease-in-out">
      <Box type="custom" x={100} time={2} base1="left" bezier="ease-in-out" isRotate={true} isScale={true} />
    </GridSection>
  </GridContainer>
));

boxStories.add('round', () => (
  <GridContainer type="row" count={3}>
    <GridSection minHeight="180px" description="round">
      <Box type="square" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true}/>
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="circle" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="triangle" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="triangle" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="star" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="pentagon" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="hexagon" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="heptagon" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
    <GridSection minHeight="180px" description="round">
      <Box type="custom" x={100} time={2} base1="left" bezier="linear" isRotate={true} isScale={true} isRound={true} />
    </GridSection>
  </GridContainer>
));