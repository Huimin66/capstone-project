import {useState} from 'react';
import styled from 'styled-components';

import Categories from '../components/Categories/Categories.js';
import Header from '../components/Header/Header.js';
import Navigation from '../components/Navigation/Navigation.js';
import ShowMenus from '../components/ShowMenus/ShowMenus';

export default function Menus({menusdata}) {
  const [menus] = useState(menusdata);
  const [currentClickedCategory, setCurrentClickedCategory] = useState('All');

  function handleCategoryClick(currentcategory) {
    setCurrentClickedCategory(currentcategory);
  }

  return (
    <>
      <Header />
      <Main>
        <Categories
          menus={menus}
          currentClickedCategory={currentClickedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <ShowMenus menus={menus} currentClickedCategory={currentClickedCategory} />
      </Main>
      <Navigation />
    </>
  );
}

const Main = styled.main`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 4rem auto;
`;
