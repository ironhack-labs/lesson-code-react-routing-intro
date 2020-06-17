import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FirstPageView from './views/FirstPage';
import SecondPageView from './views/SecondPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <span>
            <Link to='/'>Home</Link>
          </span>
          <span>
            <Link to='/second/jose'>Jose's Profile</Link>
          </span>
          <span>
            <Link to='/second/santi'>Santi's Profile</Link>
          </span>
        </nav>
        <Switch>
          <Route path='/second/:name' exact component={SecondPageView} />
          <Route path='/' exact component={FirstPageView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
