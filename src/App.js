import {Routes, Route} from 'react-router-dom';

import menusdata from './data.js';
import useStoreLogin from './hooks/useStore_login.js';
import Details from './pages/Details.js';
import Home from './pages/Home.js';
import Login from './pages/Login';
import Menus from './pages/Menus.js';
import Orders from './pages/Orders.js';
import ShoppingCart from './pages/ShoppingCart.js';

function App() {
  const {login} = useStoreLogin(state => ({
    login: state.login,
  }));

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menus" element={<Menus menusdata={menusdata} />} />
      <Route path="/details/:id" element={<Details menusdata={menusdata} />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/order" element={<Orders />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={login.token ? <Menus menusdata={menusdata} /> : <Login />} />
    </Routes>
  );
}

export default App;
