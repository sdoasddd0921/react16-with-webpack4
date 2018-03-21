import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../css/app.css'

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
            <Item key="1">test1</Item>
            <Item key="2">test2</Item>
            <Item key="3">test3</Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'aliceblue', padding: 0}}>
            <h1>Header</h1>
          </Header>
          <Content>
            <h2>Content</h2>
          </Content>
        </Layout>
      </Layout>
    );
  }
}