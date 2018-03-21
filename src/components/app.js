import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../css/app.css';
import InputForm from '../components/form';

const { Header, Footer, Sider, Content } = Layout;
const { Item } = Menu;

const Root = () => (
  <div>Root component.</div>
);

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>
          <div className="logo">Demo</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
            <Item key="1"><Icon type="question"/>test1</Item>
            <Item key="2">test2</Item>
            <Item key="3">test3</Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'aliceblue' }}>
            <h1>Header</h1>
          </Header>
          <Content style={{ background: '#FFF', minHeight: 300, padding: 24, margin: '24px 16px' }}>
            <InputForm />
          </Content>
        </Layout>
      </Layout>
    );
  }
}