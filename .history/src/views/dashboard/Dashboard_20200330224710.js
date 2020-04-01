import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { SiderDash } from '../../components/dashboard/Sider';
import { HeaderDashboard } from '../../components/dashboard/Header';
import'./Dashboard.css';

const { Content, Footer } = Layout;

export const Dashboard = () => {
  

  return( <Layout style={{ minHeight: '100vh' }}>
            <SiderDash />
            <Layout className="site-layout">
              <HeaderDashboard/>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Bill is a cat.
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>);
          }

/*export  class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
     
    );
  }
}*/