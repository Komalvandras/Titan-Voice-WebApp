import { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';

import LandingPage from './components/LandingPage';
import PromoPage from './components/PromoPage';
import MainLayout from './components/MainLayout';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
      <Route path="/promo" component={PromoPage} />
      <Route path="/website" component={MainLayout} />
    </Router>
  );
};

export default App;