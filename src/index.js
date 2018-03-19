import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Button, Radio } from 'antd';

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
      <div>
        <h1>React test1</h1>
        <DatePicker />
        <Button type="danger" icon="search" disabled={this.state.disabled} onClick={this.clickHandle.bind(this)}>按钮</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);