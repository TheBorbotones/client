import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { SiderDash } from '../../components/dashboard/Sider';
import { HeaderDashboard } from '../../components/dashboard/Header';
import { FooterDash } from '../../components/dashboard/Footer';
// import { User } from '../user/User';
import'./Dashboard.css';

const { Content } = Layout;

export const Dashboard = (props) => {
  

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
                { props.children }
                </div>
              </Content>
              <FooterDash/>
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