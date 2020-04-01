import React, {useState} from 'react';
import { Spin } from 'antd';
import'./Login.css';
import { FormLogin } from '../../components/login/Form';
import { useHistory } from 'react-router-dom';

 const Login = () => {

  const [loging, setLoging] = useState(false);
  const history = useHistory();

  const onIniciarSesion = (values) =>{
    console.log(values);
    setTimeout( () =>{
      setLoging(false);
    },    
      2000
    );
    setLoging(true);
    history.push("/usuario");


  }
   return(
   <React.Fragment>
       {/*<img className="fondo" alt="fondo" src={require('./../../assets/wave.png')}/>*/}
        <div className="container">
              <div className="img">
                 <img alt="bg" src={require('./../../assets/bg.svg')} /> 
              </div>
              <div className="login-content">
                  <Spin spinning = {loging}>
                    <FormLogin iniciarSesion = {onIniciarSesion}/>
                  </Spin>
              </div>
        </div>
   </React.Fragment>
   )
}
export default Login;