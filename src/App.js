import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './components';
import { Home, Stays, Destinations } from './components/pages';
import './index.css';

const rootStyle = {
  position: 'relative',
  height: '100vh',
  backgroundColor: '##F0E5CF',
};

function App() {
  return (
    <div style={rootStyle}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={['/', '/home']}>
            <Home />
          </Route>
          <Route path="/destinations">
            <Destinations />
          </Route>
          <Route path="/stays">
            <Stays />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
