import {Routes, Route} from 'react-router-dom';

import menusdata from './data.js';
import Details from './pages/Details.js';
import Menus from './pages/Menus.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menus menusdata={menusdata} />} />
      <Route path="/details/:id" element={<Details menusdata={menusdata} />} />
    </Routes>
  );
}

export default App;
