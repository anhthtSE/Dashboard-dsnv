import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { 
  Typography,
  Button,
  Layout, 
  theme } from 'antd';
import { ArrowRightOutlined} from '@ant-design/icons'

// component
import Navbar from './components/SiderBar/Navbar';
import DepartmentTable from './components/Employee/ScreenTable'
import EmployeeTable from './components/Employee/ScreenAllMember'
import EmployeeContact from './components/Contract/EmployeeContact';
import CreateNewEmployee from './components/Employee/CreateNewEmployee';
import MyContact from './components/Contract/MyContact';;

const { Header, Content, Footer, Sider } = Layout;

const {Title} = Typography;


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
          <Header style={{ padding: '0 16px', margin: '10px', backgroundColor: colorBgContainer, display: 'flex', justifyContent: 'space-between' }}>
                <Title level={3} style={{ margin: 16 }}>Danh sách nhân viên</Title>
                <Button type='primary' style={{ margin: 16 }}><ArrowRightOutlined /></Button>
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
                  <Route path='/hdnv' element={<EmployeeContact/>}/>
                  <Route path='/tnvm' element={<CreateNewEmployee/>} />
                  <Route path='/hdct' element={<MyContact/>}/>
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
