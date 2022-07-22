import {Routes, Route} from 'react-router-dom';

import menusdata from './data.js';
import Details from './pages/Details.js';
import Menus from './pages/Menus.js';
import Orders from './pages/Orders.js';
import ShoppingCart from './pages/ShoppingCart.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menus menusdata={menusdata} />} />
      <Route path="/details/:id" element={<Details menusdata={menusdata} />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/order" element={<Orders />} />
    </Routes>
  );
}

export default App;
