import {useEffect, useState} from 'react';
import styled from 'styled-components';

export default function ShowMenus({menus, curClickedCategory}) {
  const [renderMenus, setRenderMenus] = useState([]);

  useEffect(() => {
    if (curClickedCategory === 'All') setRenderMenus(menus);
    else
      setRenderMenus(
        menus.filter(menu => {
          return curClickedCategory === menu.category;
        })
      );
    /* eslint-disable-next-line */
  }, [curClickedCategory]);

  return (
    <MenusContainer>
      {renderMenus.map(menu => {
        return (
          <Menu key={menu.id}>
            <MenuImg src={menu.image} alt={menu.name} />
            <MenuNamePriceContainer>
              <Menuname>{menu.name}</Menuname>
              <Menuprice>{menu.price + '€'}</Menuprice>
            </MenuNamePriceContainer>
          </Menu>
        );
      })}
    </MenusContainer>
  );
}

const MenusContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: start;
  align-content: start;
  gap: 0.5rem;
  font-size: 0.8rem;
`;

const Menu = styled.li`
  margin: 0 auto;
  padding: 0.5rem;
  background-color: #dfdfe7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MenuImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
`;

const MenuNamePriceContainer = styled.div`
  width: 100%;
  color: #036;
  margin: auto;
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

const Menuname = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Menuprice = styled.span`
  font-weight: 700;
`;
