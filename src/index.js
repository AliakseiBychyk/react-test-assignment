import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import './styles/styles.css';

const App = () => (
  <Router>
    <AppRouter />
  </Router>
);

render(<App />, document.getElementById('root'));
