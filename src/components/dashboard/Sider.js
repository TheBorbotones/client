import React,  {useState} from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined,
         PieChartOutlined,
         FileOutlined,
         TeamOutlined,
         UserOutlined,} from '@ant-design/icons';
import './Sider.css'
const { Sider } = Layout;

const { SubMenu } = Menu;

export const SiderDash = () =>{

    const [collapsede, setCollapsede] = useState(false);
  
    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsede(collapsed)
    };
    
  return(    <Sider collapsible collapsed={collapsede} onCollapse={onCollapse}>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <UserOutlined />
            <span>User</span>
          </span>
        }
      >
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <TeamOutlined />
            <span>Team</span>
          </span>
        }
      >
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9">
        <FileOutlined />
      </Menu.Item>
    </Menu>
  </Sider>)
}