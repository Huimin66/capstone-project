import {useState} from 'react';
import {AiFillTwitterCircle, AiFillGoogleCircle} from 'react-icons/ai';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import useStoreLogin from '../hooks/useStore_login.js';

export default function Login() {
  const [inputCredentials, setInputCredentials] = useState({
    username: '',
    password: '',
  });

  const {setToken, setCredentials} = useStoreLogin(state => ({
    setToken: state.setToken,
    setCredentials: state.setCredentials,
  }));

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputCredentials),
    })
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          return new Error('Data coud not be fetched!');
        }

        setToken(data);
        setCredentials(event.target.elements.username.value, event.target.elements.password.value);
        navigate('/menus');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setInputCredentials({...inputCredentials, [name]: value});
  }

  return (
    <LoginPage>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Username>
          Username
          <Input type="text" name="username" value={inputCredentials.username} onChange={handleChange} />
        </Username>
        <Password>
          Password
          <Input type="password" name="password" value={inputCredentials.password} onChange={handleChange} />
        </Password>
        <LoginButton>LOGIN</LoginButton>
        <SignUpTipps>
          Or sign up Using
          <Logos>
            <RiFacebookCircleFill style={{color: '#395598'}} />
            <AiFillTwitterCircle style={{color: '#1a9fee'}} />
            <AiFillGoogleCircle style={{color: '#ec4239'}} />
          </Logos>
        </SignUpTipps>
      </LoginForm>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  border-top: 1px solid var(--primary-light-color);
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
`;
const LoginForm = styled.form`
  width: 80%;
  height: 70%;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 2px 2px #888;
`;

const Title = styled.h1`
  margin: 0 auto;
`;

const Username = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Password = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  border-bottom: 1px solid black;
  &: focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem;
  border-radius: 20px;
  background: linear-gradient(90deg, #f77c00, orange);
  color: white;
`;

const SignUpTipps = styled.div`
  margin: 1rem auto;
`;

const Logos = styled.div`
  margin: 1rem auto;
  font-size: 2rem;
`;
