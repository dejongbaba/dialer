import React,{useState} from "react";
import { useHistory } from "react-router";
import "./login.scss";
import placeHolder from "../../assets/svg/crmIllustration.svg";
import Form,{Input,Button} from "../../components/Form/Form";


type LoginFormType = {
    className:string
}
const LoginForm = ({className}:Partial<LoginFormType>) => {
    const history = useHistory();
    const [form,setForm] = useState('login');

    return <div className={`login-form ${className?className:''}`}>
        <div className='login-form-left'>
            <p>Join Our Wailing List of Customers</p>
            <img src={placeHolder} className='login-form-left-image' alt="customers"/>
        </div>
        <div className='login-form-right'>
            <div className='login-form-right-top'>
                <div className='login-form-right-top-action'>
                     <span
                         className={` ${form === 'login' ?'active' :''}`}
                         onClick={()=>setForm('login')}>login</span>
                    <span onClick={()=>setForm('signup')}
                          className={` ${form === 'signup' ?'active' :''}`}>signup</span>
                </div>

            </div>
            {form === 'login' && <Form onSubmit={()=>history.push('/dashboard')}>
                <Input onChange={(e)=>console.log('e',e)} type={'email'} value='tosin@example.com' label={'Email'} name='email' />
                <Input onChange={(e)=>console.log('e',e)} type={'password'} value='hsds' label={'Password'} name='password' />
                <Button type='submit' title={'Log in'}  />
            </Form> }

            {form === 'signup' && <Form onSubmit={()=>history.push('/dashboard')}>
                <Input onChange={(e)=>console.log('e',e)} type={'text'} value='hsds' label={'Business Name'} name='email' />
                <Input onChange={(e)=>console.log('e',e)} type={'email'} value='hsds' label={'Email'} name='email' />
                <Input onChange={(e)=>console.log('e',e)} type={'password'} value='hsds' label={'Password'} name='password' />
                <Button type='submit' title={'Log in'}  />
            </Form>}

        </div>
    </div>
}




function Login() {
  return (
    <div className="login w-full h-screen mx-auto align-center">
      <div className='login-left'>

      </div>
      <div className='login-right'>

      </div>
        <LoginForm  />
      <p className="login-footer">
        &copy;2020 sanimara Corp. All rights reserved.
      </p>
    </div>
  );
}

export default Login;
