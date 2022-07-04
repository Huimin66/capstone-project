import {useState} from 'react';
import styled from 'styled-components';

import Categories from './components/Categories/Categories';
import ShowMenus from './components/ShowMenus/ShowMenus';
import menusdata from './data.js';

export default function App() {
  /* eslint-disable-next-line */
  const [menus, setmenus] = useState(menusdata);
  const [curClickedCategory, setCurClickedCategory] = useState('All');

  function handleCategoryClick(curcategory) {
    setCurClickedCategory(curcategory);
  }

  return (
    <Main>
      <Categories menus={menus} curClickedCategory={curClickedCategory} handleCategoryClick={handleCategoryClick} />
      <ShowMenus menus={menus} curClickedCategory={curClickedCategory} />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.5rem;
`;
