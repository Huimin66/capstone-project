import {useEffect, useState} from 'react';
import styled from 'styled-components';

import useCategories from './useCategories';

export default function Categories({menus, handleCategoryClick, curClickedCategory}) {
  const [categories, setCategories] = useState([]);
  const {getAlternativeCategorie, getCategoriesAndSort} = useCategories();

  useEffect(() => {
    setCategories(getAlternativeCategorie(menus));

    const sortBy = ['All', 'Starters', 'Mains', 'Pastries', 'Drinks'];
    getCategoriesAndSort(menus, sortBy);
  }, []);

  return (
    <CategoriesContainer>
      {categories.map(category => {
        return (
          <Category
            key={category}
            active={curClickedCategory === category}
            onClick={() => handleCategoryClick(category)}
          >
            {category.toUpperCase()}
          </Category>
        );
      })}
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-content: start;
`;

const Category = styled.span`
  border-radius: 5px;
  width: 100%;
  padding: 0.8rem;
  border-bottom: 1px solid #ababab;
  writing-mode: vertical-lr;
  text-orientation: upright;
  text-shadow: 0 0 0.1em #036;
  &:nth-last-child(1) {
    border-bottom: none;
  }

  background-color: ${({active}) => (active ? '#ffd9bb' : '#f7f7f7')};
`;
