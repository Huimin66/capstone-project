import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function ShowMenus({menus, currentClickedCategory}) {
  const filteredMenus = menus.filter(
    menu => currentClickedCategory === 'All' || menu.category === currentClickedCategory
  );

  return (
    <MenusContainer>
      {filteredMenus.map(menu => {
        return (
          <Link key={menu.id} to={`/details/${String(menu.id)}`}>
            <Menu>
              <MenuImg src={menu.image} alt={menu.name} />
              <MenuNamePriceContainer>
                <Menuname>{menu.name}</Menuname>
                <Menuprice>{menu.price + '€'}</Menuprice>
              </MenuNamePriceContainer>
            </Menu>
          </Link>
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
  background-color: #f7f7f7;
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
  color: var(--third-color);
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
