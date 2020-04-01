import React  from 'react';
import { Form, Input, Button,  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Form.css';
const layout = {
    labelCol: { span: 16 },
    wrapperCol: { offset: 4, span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};

export const FormLogin = (props) =>{

      const onFinish = values => {      
        // console.log('Success:', values);
        props.iniciarSesion(values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      return React.cloneElement (
        <Form {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <img className='avatar' alt="avatar" src={require('./../../assets/avatar.svg')} />
        <br/>
        <h2 className="title">BIENVENIDO</h2>
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Por favor ingrese su nombre de usuario!' }]}>
            <Input placeholder="Usuario"  prefix={<UserOutlined />}/>
        </Form.Item>

        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}>
            <Input.Password placeholder="Contraseña"  prefix={<LockOutlined />}/>
        </Form.Item>
        <Form.Item>

        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button htmlType="submit"
                type="primary" 
                block>
            Iniciar Sesión
            </Button>
        </Form.Item>
</Form>
    )
};