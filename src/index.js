import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Button, Radio } from 'antd';
import App from './app';
import './router.css';
import { Switch, NavLink, Route, BrowserRouter } from 'react-router-dom';

const Root = () => (
  <div>
    Root component.
    <NavLink to="/root/cat" activeClassName="nav-active">cat</NavLink>
    <Route path="/root/cat" component={Cat}/>
  </div>
);
const Home = () => (
  <div>Home component.</div>
);
const Cat = () => (
  <div>Cat.</div>
);

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }

  clickHandle() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>React test1</h1>
          <DatePicker />
          <Button type="danger" icon="search" disabled={this.state.disabled} onClick={this.clickHandle.bind(this)}>按钮</Button>
          <hr/>
          <ul>
            <li><NavLink activeClassName="nav-active" to="/root">root</NavLink></li>
          </ul>
          <div className="routers">
            <Route exact path="/" component={Home}/>
            <Route path="/root" component={Root}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);