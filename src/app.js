import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

const Root = () => (
  <div>Root component.</div>
);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink activeClassName="nav-active" to="/root">root</NavLink></li>
        </ul>
        <div className="routes">
          <Route path="/root" component={Root}/>
        </div>
      </div>
    );
  }
}