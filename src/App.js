import React from 'react';
import { Layout } from 'antd';

import HeaderComponent from './components/header';
import LayoutModule from './components/layoutModule';
import FooterComponent from './components/footer';

import './App.scss';
import 'antd/dist/antd.css';

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <HeaderComponent />
      </Header>
      <Content>
        <LayoutModule />
      </Content>
      <Footer>
        <FooterComponent />
      </Footer>
    </Layout>
  );
}

export default App;
