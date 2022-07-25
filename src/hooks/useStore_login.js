import create from 'zustand';
import {persist} from 'zustand/middleware';

const loginStore = set => ({
  login: {token: '', credentials: {username: '', password: ''}},

  setToken: token => {
    set(state => ({
      login: {...state.login, token: token},
    }));
  },
  setCredentials: (username, password) => {
    set(state => ({
      login: {
        token: state.login.token,
        credentials: {...state.login.credentials, username: username, password: password},
      },
    }));
  },
});

const useStoreLogin = create(persist(loginStore, {name: 'login'}));

export default useStoreLogin;
