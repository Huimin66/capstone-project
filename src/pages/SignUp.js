import {useState} from 'react';
import {AiFillTwitterCircle, AiFillGoogleCircle} from 'react-icons/ai';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {Link, useNavigate} from 'react-router-dom';
import styled, {css} from 'styled-components';

import useLogin from '../hooks/useLoginStore.js';

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [inputCredentials, setInputCredentials] = useState({
    username: '',
    password: '',
    email: '',
  });

  const {setToken, setCredentials} = useLogin(state => ({
    setToken: state.setToken,
    setCredentials: state.setCredentials,
  }));

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputCredentials),
    })
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          console.log(data)
          setErrorMessage(data);
          return new Error('Data could not be fetched!');
        }

        setToken(data);
        setCredentials(
          event.target.elements.username.value,
          event.target.elements.password.value
        );
        navigate('/menus');
      })
      .catch(error => {
        setErrorMessage(error);
      });
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setInputCredentials({...inputCredentials, [name]: value});
  }

  return (
    <SignUpPage>
      <SignUpForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Email>
          Email
          <Input
            type="text"
            name="email"
            value={inputCredentials.email}
            onChange={handleChange}
          />
        </Email>
        <Username>
          Username
          <Input
            type="text"
            name="username"
            value={inputCredentials.username}
            onChange={handleChange}
          />
        </Username>
        <Password>
          Password
          <Input
            type="password"
            name="password"
            value={inputCredentials.password}
            onChange={handleChange}
          />
        </Password>
        {/* {errorMessage && <ErrMessage>{errorMessage}</ErrMessage>} */}
        <SignUpButton>Sign Up</SignUpButton>
        <SignUpTipps>
          Or Sign Up Using
          <Logos>
            <RiFacebookCircleFill style={{color: '#395598'}} />
            <AiFillTwitterCircle style={{color: '#1a9fee'}} />
            <AiFillGoogleCircle style={{color: '#ec4239'}} />
          </Logos>
          <GoToLogin>
            Already have an account? <Link to={'/login'}>Sign in</Link>
          </GoToLogin>
        </SignUpTipps>
      </SignUpForm>
    </SignUpPage>
  );
}

const SignUpPage = styled.div`
  width: 100%;
  height: 100vh;
  border-top: 1px solid var(--primary-light-color);
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
`;
const SignUpForm = styled.form`
  width: 80%;
  height: 80%;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const SharedDiv = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Username = styled.div`
  ${SharedDiv}
`;

const Email = styled.div`
  ${SharedDiv}
`;

const Password = styled.span`
  ${SharedDiv}
`;

const Input = styled.input`
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

const SignUpButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 20px;
  background: #18453b;
  color: white;
`;

const SignUpTipps = styled.div`
  text-align: center;
  width: 1rem 100%;
  margin: 0 auto;
`;

const Logos = styled.div`
  margin: 1rem auto;
  font-size: 2rem;
`;

const ErrMessage = styled.div`
  color: crimson;
`;

const GoToLogin = styled.div`
  font-size: 0.9rem;
`;
