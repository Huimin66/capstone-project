import {Routes, Route} from 'react-router-dom';

import menusdata from './data.js';
import Details from './pages/Details.js';
import Home from './pages/Home.js';
import Menus from './pages/Menus.js';
import Orders from './pages/Orders.js';
import ShoppingCart from './pages/ShoppingCart.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menus" element={<Menus menusdata={menusdata} />} />
      <Route path="/details/:id" element={<Details menusdata={menusdata} />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/order" element={<Orders />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
