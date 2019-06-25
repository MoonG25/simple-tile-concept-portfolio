import React from 'react';
import { Route, Switch } from 'react-router-dom';


// pages
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';
import PostsPage from './pages/Posts';
import AboutPage from './pages/About';
import GridPage from './pages/Grid';
import FlexPage from './pages/Flex';
import MovePage from './pages/Move';

export default props => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/blog" component={BlogPage} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/portfolio" component={PortfolioPage} />
    <Route exact path="/posts" component={PostsPage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/grid" component={GridPage} />
    <Route exact path="/flex" component={FlexPage} />
    <Route exact path="/move" component={MovePage} />
  </Switch>
);