import {useState} from 'react';
import styled from 'styled-components';

import Categories from '../components/Categories/Categories.js';
import ShowMenus from '../components/ShowMenus/ShowMenus';

export default function Menus({menusdata}) {
  const [menus] = useState(menusdata);
  const [currentClickedCategory, setCurrentClickedCategory] = useState('All');

  function handleCategoryClick(currentcategory) {
    setCurrentClickedCategory(currentcategory);
  }

  return (
    <Main>
      <Categories
        menus={menus}
        currentClickedCategory={currentClickedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <ShowMenus menus={menus} currentClickedCategory={currentClickedCategory} />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.5rem;
`;
