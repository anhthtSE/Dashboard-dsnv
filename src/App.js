import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
import { 
  Layout, 
  Button, 
  Typography,
  theme } from 'antd';

// component
import Navbar from './components/Navbar';
import EmployeeList from './page/EmployeeList';
import DepartmentList from './page/DepartmentList';

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
        // width: 256,
          minHeight: '100vh',
        }}
      >
        {/* Navigation */}
        <Sider theme='light' collapsible>
          <div className="demo-logo-vertical" />
          <Navbar/>
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
              

              <div
                style={{
                  padding: 24,
                  minHeight: 100,
                  margin: '20 0px',
                  background: colorBgContainer,
                }}
                >
                  {/* ==============<Screen>=============== */}
                <Routes>
                  <Route path='/employee-list' element={<EmployeeList/>}/>
                  <Route path='/employee-list:selectedService' element={<DepartmentList/>}/>
                </Routes>
                

              </div>
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
