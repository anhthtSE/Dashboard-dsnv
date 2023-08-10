import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
import { 
  Layout, 
  Button, 
  Typography,
  theme } from 'antd';

// component
import Navbar from './components/Navbar';
import DepartmentTable from '../src/components/ScreenTable'
import EmployeeTable from './components/ScreenAllMember'

const { Header, Content, Footer, Sider } = Layout;

const { Title} = Typography;


const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        {/* Navigation */}
        <Sider theme='light' width={'290'} style={{overflow: 'auto', height: '100vh',}} >
            <Navbar />
        </Sider>          
          {/* Content, Header, Footer */}
        <Layout>

          {/*============= Header Start ===========*/}
            <Header
              style={{
                padding: '0 16px',
                margin: '10px',
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'space-between',
              }}
              >
                
              <Title level={3} style={{margin: 16}}>Danh sách nhân viên</Title>
              <Button type='primary' style={{margin: 16}}><ArrowRightOutlined/></Button>
              
            </Header>
              {/*============= Header End ===========*/}

              {/* =============Content Start========== */}
            <Content
              style={{
                margin: '0 16px',
                textAlign: 'right',
              }}
              >
                  {/* ==============<Screen>=============== */}
                <Routes>
                  <Route path='/pb' element={<DepartmentTable/>}/>
                  <Route path='/tbnv' element={<EmployeeTable/>}/>
                </Routes>
            </Content>
            {/* =============Content End========== */}

            <Footer
                style={{
                  textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>


      </Layout>
    </Router>
  );
}

export default App;
