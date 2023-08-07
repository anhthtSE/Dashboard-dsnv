import React from 'react';
// import Dashboard from './page/Dashboard';
import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
import { 
  Layout, 
  Button, 
  Typography,
  theme } from 'antd';
// component
import Navbar from './components/Navbar';
import ScreenTable from './components/ScreenTable';
const { Header, Content, Footer, Sider } = Layout;

const { Title} = Typography;


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
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
              <Button style={{
                backgroundColor: 'blue',
                color: 'white',
              }}
              >
                <PlusOutlined /> Thêm nhân viên
            </Button>

              <div
                style={{
                  padding: 24,
                  minHeight: 100,
                  background: colorBgContainer,
                }}
                >
                  <ScreenTable/>
                

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
    </>
  );
}

export default App;
