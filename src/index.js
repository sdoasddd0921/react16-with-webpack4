import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>React test</h1>
        <DatePicker />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);