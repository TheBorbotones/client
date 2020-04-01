import React from 'react';
import { Layout , Row, Col, Badge, Button, Menu, Dropdown } from 'antd';
import { GlobalOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
const { Header } = Layout;
export const HeaderDashboard = () =>{
    return(
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row>
            <Col span={24}>
                <div style = {{ float:'right'}}>
                    <Badge count={2}  style={{ padding: 0, margin: 10,}}>
                        <Button style={{border: 'none', background:'rgba(255, 255, 255, 0.2)', padding: 0, margin: 10, height: 55, alignItems:'center' }}
                                icon={<BellOutlined style={{ fontSize: 20,verticalAlign: 'top',}}/>}>
                        </Button>
                    </Badge>
                    <DropdownPerfil />
                    <DropdownMenu />
                </div>
            </Col>
         </Row>
        </Header>
    )
};
const DropdownPerfil = () =>{
    const menu = (
        <Menu>
            <Menu.Item key="1">
                <UserOutlined />
                Perfil
            </Menu.Item>
            <Menu.Item key="2">
                <UserOutlined />
                Cerrar Sesion
            </Menu.Item>
        </Menu>
    );
    return(
        <Dropdown overlay={menu} >
            <Button style={{border: 'none',background:'rgba(255, 255, 255, 0.2)', padding: 0, margin: 10, height: 55, alignItems:'center' }}
                    icon={<UserOutlined  style={{ fontSize: 20, verticalAlign: 'top',}}/>}>
                Miguel Mamani
            </Button>
        </Dropdown>
    );
};

const DropdownMenu = () => {
    const menu = (
        <Menu>
         <Menu.Item key="1">
             <strong style={{ color: '#1088e9' }}> us </strong> Inglish
         </Menu.Item>
         <Menu.Item key="2">
            <strong style={{ color: '#1088e9' }}> es </strong>Español
         </Menu.Item>
        </Menu>
    );
    return (  
        <Dropdown key="1"
                  overlay={menu} >
            <Button style={{border: 'none',background:'rgba(255, 255, 255, 0.2)', padding: 0, margin: 10, height: 55, alignItems:'center' }}
                    icon={<GlobalOutlined style={{ fontSize: 20, verticalAlign: 'top',}}/>}>
            </Button>
        </Dropdown>   
      );
};