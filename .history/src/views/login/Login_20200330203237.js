import React, {useState} from 'react';
import { Spin } from 'antd';
import'./Login.css';

 const Login = () => {

  const [loging, setLoging] = useState(false);
  const onIniciarSesion = (values) =>{
    console.log(values);
    setTimeout( () =>{
      setLoging(false);
    },    
      3000
    );
    setLoging(true);

  }
   return(
   <React.Fragment>
      <img className="fondo" alt="fondo" src={require('./../../assets/wave.png')}/>
        <div className="container">
              <div className="img">
                  <img alt="bg" src={require('./../../assets/bg.svg')} />
              </div>
              <div className="login-content">
                  <Spin spinning = {loging}>

                  </Spin>
              </div>
        </div>
   </React.Fragment>
   )
}
export default Login;