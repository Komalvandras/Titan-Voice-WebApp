import { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';

import LandingPage from './components/LandingPage';
import PromoPage from './components/PromoPage';
import MainLayout from './components/MainLayout';
import SupportPage from './components/SupportPage';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
      <Route path="/promo" component={PromoPage} />
      <Route path="/website" component={MainLayout} />
      <Route path="/support" component={SupportPage} />
    </Router>
  );
};

export default App;