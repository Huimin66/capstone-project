import {nanoid} from 'nanoid';

const menusdata = [
  {
    id: 1,
    name: 'Kung Pao Chicken',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491336/menu/Kung-Pao-chicken_owdyqj.jpg',
    price: 9.9,
    category: 'Mains',
    ingredients: 'Chicken breast, peanuts, chili peppers, soy sauce, baking soda, cornstarch, salt, oil',
    taste: 'Spicy, Salty, Sweet',
    spiciness: 3,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491336/menu/Kung-Pao-chicken_owdyqj.jpg',
        guest: 'Guest A',
        text: 'Delicious and good meal and pleasant atmosphere. Had a family dinner and served well by the restaurant.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'Very spicy, too much for me, but everyone else loved it.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'We also prefer cashews over the peanuts but either tastes good.',
      },
    ],
  },
  {
    id: 2,
    name: 'Peking Duck',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656683121/menu/Peking-Duck_s8bedg.jpg',
    price: 12.9,
    category: 'Mains',
    ingredients: 'Duck, lemon, honey, soy sauce, flour, spring onions, hoisin sauce, salt, oil',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656683121/menu/Peking-Duck_s8bedg.jpg',
        guest: 'Guest A',
        text: 'This was the best Peking Duck I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'The crispy Pecking duck, Curries with peanut sauce and spicy sauce which can be ordered either with chicken, pork, beef or just veggies are really awesome.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'The food was a bit dry for me but the wine was great. they were very polite at all times so thats a big bonus.',
      },
    ],
  },
  {
    id: 3,
    name: 'Sweet and Sour Pork',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/Sweet-and-Sour_Pork_mku0nw.jpg',
    price: 10.9,
    category: 'Mains',
    ingredients:
      'Pork, bell pepper, pineapple, cornstarch, ketchup, brown sugar, vinegar, garlic, ginger, onion, salt, oil',
    taste: 'Sweet, Sour, Salty',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/Sweet-and-Sour_Pork_mku0nw.jpg',
        guest: 'Guest A',
        text: 'One of the best sweet and sour pork. Meat was tender and full of flavour. Family adored it!',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'Tasty but rather too sweet.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'Yep, you definitely get to claim this as the best Sweet & Sour Pork ever. Love that kick of ginger.',
      },
    ],
  },
  {
    id: 4,
    name: 'Mapo Tofu',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/Mapo-Tofu_w8q2yw.jpg',
    price: 6.9,
    category: 'Mains',
    ingredients: 'Tofu, Chili Bohnen Paste, minced beef, salt, oil',
    taste: 'Spicy, Salty',
    spiciness: 3,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/Mapo-Tofu_w8q2yw.jpg',
        guest: 'Guest A',
        text: 'This was the best Mapo Tofu I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'Very delicious, tofu tastes fantastic with chilly pepper!.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'It’s not bad. I’d go so far as to call it tasty, although it tastes nothing like either traditional Szechuan Ma Po Tofu or the Korean version.',
      },
    ],
  },
  {
    id: 5,
    name: 'Twice Cooked Pork',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491338/menu/Twice-Cooked-Pork_hvovno.jpg',
    price: 12.9,
    category: 'Mains',
    ingredients:
      'Pork belly, bell pepper, chili bean paste,sweet bean paste , ginger, leek, Sichuan peppercorn, soy sauce, salt, oil',
    taste: 'Spicy, Salty',
    spiciness: 2,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491338/menu/Twice-Cooked-Pork_hvovno.jpg',
        guest: 'Guest A',
        text: 'This was the best Twice Cooked Pork I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'This is delicious, slightly over-salted but a minor detail.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'This idsh is divine and the chef shared the history of many dishes. Delicious and totally recommended.',
      },
    ],
  },
  {
    id: 6,
    name: 'Yuxiang Eggplant',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491338/menu/Yu-Xiang-Eggplant_oyo3ai.jpg',
    price: 12.9,
    category: 'Mains',
    ingredients:
      'Eggplant, fresh shiitake, garlic, ginger, green onionsoy sauce, oyster sauce, vinegar, brown sugar, cornstarch, sesame oil, salt, oil',
    taste: 'Spicy, Sweet, Sour, Salty',
    spiciness: 1,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491338/menu/Yu-Xiang-Eggplant_oyo3ai.jpg',
        guest: 'Guest A',
        text: 'Can’t find the words to praise this dish enough.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'Fantastic flavours, friendly service and extremely good value. ',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'Chinese kitchen with german adaption, Yuxiang Eggplant real delicious.',
      },
    ],
  },
  {
    id: 7,
    name: 'Squirrel Shaped Mandarin Fish',
    image:
      'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/squirrel-shaped-mandarin-fish_y74urn.jpg',
    price: 19.9,
    category: 'Mains',
    ingredients: 'Grass carp, Starch, minced garlic, Ketchup, sugar, soy sauce, vinegar, broth, salt, oil',
    taste: 'Sweet, Sour, Salty',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image:
          'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/squirrel-shaped-mandarin-fish_y74urn.jpg',
        guest: 'Guest A',
        text: 'Retaurant that offer Squirrel Shaped Mandarin Fish is not easy to find, but worthy it, so tasty.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'The meat just falls of the bone, and the sauce is of the perfect consistency!',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'Class dishes in a contemporary designed restaurant.',
      },
    ],
  },
  {
    id: 8,
    name: 'Fried Mushroom',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491336/menu/Fried_Mushroom_br3rhv.jpg',
    price: 7.9,
    category: 'Mains',
    ingredients: 'Oyster Mushroom, salt and black pepper to taste, flour, egg, salt, oil',
    taste: 'Salty',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491336/menu/Fried_Mushroom_br3rhv.jpg',
        guest: 'Guest A',
        text: 'This was the best Fried Mushroom I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'This is our 3rd time to roder this dish, it is not big but has good taste.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'This Fried Mushroom was really excellent - far beyond and above what one ought to expect for the price. ',
      },
    ],
  },
  {
    id: 9,
    name: 'Celery and dried bean cord',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/Celery_and_dried_bean_cord_yapjzf.jpg',
    price: 12.9,
    category: 'Starters',
    ingredients: 'Celery stems, dry bean curd, onion, ginger, white vinegar, salt, oil',
    taste: 'Spicy, Sweet, Salty',
    spiciness: 1,
    reviews: [
      {
        id: nanoid(),
        image:
          'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491337/menu/Celery_and_dried_bean_cord_yapjzf.jpg',
        guest: 'Guest A',
        text: 'This was the best Celery and dried bean cord I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'I love love love spicy foods! This is my favorite at the chinese restaurant.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'Not a common dish, but tastes good, a little bit spicy.',
      },
    ],
  },
  {
    id: 10,
    name: 'Tossed Cucumber in Sauce',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491338/menu/Tossed_Cucumber_in_Sauce_nvt4zt.jpg',
    price: 4.9,
    category: 'Starters',
    ingredients: 'Cucumbers, granulated sugar, rice vinegar, sesame oil, light soy sauce, salt, oil',
    taste: 'Spicy, Sweet, Sour, Salty',
    spiciness: 2,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491338/menu/Tossed_Cucumber_in_Sauce_nvt4zt.jpg',
        guest: 'Guest A',
        text: 'This was the best Tossed Cucumber in Sauce I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'Never though cucumber can tastes so differently and delicious.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'Fantastic flavours, friendly service and extremely good value. ',
      },
    ],
  },
  {
    id: 11,
    name: 'Water',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490204/menu/Water_h8f4lh.jpg',
    price: 1.9,
    category: 'Drinks',
  },
  {
    id: 12,
    name: 'Apple Spritzer',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490203/menu/Apfelschorle_zxhwrj.jpg',
    price: 1.9,
    category: 'Drinks',
  },
  {
    id: 13,
    name: 'Beer',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490203/menu/beer_ppyotj.jpg',
    price: 2.9,
    category: 'Drinks',
  },
  {
    id: 14,
    name: 'Chrysanthemum Tea',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490202/menu/Chrysanthemum_Tea_mjx9vn.jpg',
    price: 2.9,
    category: 'Drinks',
  },
  {
    id: 15,
    name: 'Fried Glutinous Rice Balls With Sesame',
    image:
      'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490182/menu/Fried_Glutinous_Rice_Balls_with_Sesame_l8smoa.jpg',
    price: 4.9,
    category: 'Pastries',
    ingredients: 'Red bean, sugar, glutinous rice flour, sesame, salt, oil',
    taste: 'Sweet',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image:
          'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490182/menu/Fried_Glutinous_Rice_Balls_with_Sesame_l8smoa.jpg',
        guest: 'Guest A',
        text: 'This was the best Fried Glutinous Rice Balls I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'All options from the menu can also be ordered as take-out! By the way, the Glutinous Rice Balls is huge and delicious!!',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: 'Not the average, but a special.',
      },
    ],
  },
  {
    id: 16,
    name: 'Yolk Pastry',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490179/menu/Yolk_Pastry_d3bmmm.jpg',
    price: 2.9,
    category: 'Pastries',
    ingredients: 'Flour, red beans, butter, white sugar, butter, sugar, egg yolk, lemon, sesame, salt, oil',
    taste: 'Sweet',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490179/menu/Yolk_Pastry_d3bmmm.jpg',
        guest: 'Guest A',
        text: 'This was the best Yolk Pastry I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'I had the the Yolk Pastry, enjoyed it. Very good dining experience..',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: "We ordered the Yolk Pastry that were the best I've had here in Munich. ",
      },
    ],
  },
  {
    id: 17,
    name: 'Mochi Balls',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490180/menu/Mochi_Balls_jfydgr.jpg',
    price: 2.9,
    category: 'Pastries',
    ingredients: 'Glutinous rice flour, red Bean, green tea powder, sugar, cornstarch, salt, oil',
    taste: 'Sweet',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490180/menu/Mochi_Balls_jfydgr.jpg',
        guest: 'Guest A',
        text: 'This was the best Mochi Balls I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: 'We live around Munich and were looking for a good Asian restaurant in the area, we were extremely positively surprised by the taste of the food.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: "The food wasn't bad, but wasn't wow..",
      },
    ],
  },
  {
    id: 18,
    name: 'Dim Sum',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490181/menu/Sim_Sum_sw2nbo.jpg',
    price: 2.9,
    category: 'Pastries',
    ingredients:
      'Chicken breast, flour, napa cabbage, shiitake mushrooms, wheat starch, sugar, yeast, baking powder, salt, oil',
    taste: 'Sweet, Salty',
    spiciness: 0,
    reviews: [
      {
        id: nanoid(),
        image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656490181/menu/Sim_Sum_sw2nbo.jpg',
        guest: 'Guest A',
        text: 'This was the best Dim Sum I have ever had.',
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest B',
        text: "We didn't expect anything and we had a pleasant suprise. ",
      },
      {
        id: nanoid(),
        image: '',
        guest: 'Guest C',
        text: "The dim sum were very tasty and my Mochi Balls was one of the nicest I've ever had. ",
      },
    ],
  },
];

export default menusdata;
