import {useEffect, useState} from 'react';
import styled from 'styled-components';

export default function Categories({menus, handleCategoryClick, curClickedCategory}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    /* Get categories form the given menus */
    function getCategories(menus) {
      const categories = menus.reduce(
        function (pre, cur) {
          if (!pre.includes(cur.category)) {
            pre.push(cur.category);
          }
          return pre;
        },
        ['All']
      );
      return categories;
    }

    setCategories(getCategories(menus));

    /* Sort categories in this order */
    const sortBy = ['All', 'Starters', 'Mains', 'Pastries', 'Drinks'];
    const categorySort = ({data, sortBy, sortfield}) => {
      const sortByObj = sortBy.reduce(
        (obj, item, index) => ({
          ...obj,
          [item]: index,
        }),
        {}
      );
      return data.sort((a, b) => sortByObj[a[sortfield]] - sortByObj[b[sortfield]]);
    };

    categorySort({data: menus, sortBy, sortfield: 'category'});
    /* eslint-disable-next-line */
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
