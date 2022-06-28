import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

export default function ShowMenus() {
  const menusdata = [
    {
      id: nanoid(),
      name: 'Kung Pao chicken',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656320691/menu/Kung-Pao-chicken_bmpali.jpg',
      price: 9.9,
    },
    {
      id: nanoid(),
      name: 'Peking Duck',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656324768/menu/Peking-Duck_dy6ecg.jpg',
      price: 12.9,
    },
    {
      id: nanoid(),
      name: 'Sweet and Sour Pork',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656321854/menu/Sweet-and-Sour_Pork_lvcbpv.jpg',
      price: 10.9,
    },
    {
      id: nanoid(),
      name: 'Mapo Tofu',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656325549/menu/Mapo-Tofu_i9gpkv.jpg',
      price: 6.9,
    },
    {
      id: nanoid(),
      name: 'Twice Cooked Pork',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656321306/menu/Twice-Cooked-Pork_rt7nq4.jpg',
      price: 12.9,
    },
    {
      id: nanoid(),
      name: 'Yuxiang Eggplant',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656326085/menu/Yu-Xiang-Eggplant_ofcs45.jpg',
      price: 12.9,
    },
    {
      id: nanoid(),
      name: 'Squirrel Shaped Mandarin Fish',
      image:
        'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656081765/menu/squirrel-shaped-mandarin-fish_irpmcl.jpg',
      price: 19.9,
    },
    {
      id: nanoid(),
      name: 'Fried Mushroom',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656323404/menu/Fried_Mushroom_dzsscr.jpg',
      price: 7.9,
    },
    {
      id: nanoid(),
      name: 'Celery and dried bean cord',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656323428/menu/Celery_and_dried_bean_cord_qlkjvm.jpg',
      price: 12.9,
    },
    {
      id: nanoid(),
      name: 'Tossed Cucumber in Sauce',
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656339387/menu/Tossed_Cucumber_in_Sauce_alsco6.jpg',
      price: 4.9,
    },
  ];

  /* eslint-disable-next-line */
  const [menus, setmenus] = useState(menusdata);

  return (
    <MenuContainer>
      {menus.map(menu => {
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
    </MenuContainer>
  );
}

const MenuContainer = styled.ul`
  width: 80%;
  margin: 1rem 1rem 1rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  max-width: 100%;
  height: auto;
`;

const MenuNamePriceContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Menuname = styled.span`
  color: #003366;
`;

const Menuprice = styled.span`
  color: #003366;
  font-weight: 700;
  margin: auto 0;
`;
