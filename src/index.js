import React from 'react';
import ReactDOM from 'react-dom';
import './router.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <App />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);