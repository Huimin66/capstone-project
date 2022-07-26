# Order your meal

I developed this App for my capstone project by neue fische Bootcamp.
I have been lived and travelled in different contries, there were always times that I was sitting in a restaurant and could not decide what for a dish I should order. Only the name of a dish reveals too little information to let me know what behind this name. Therefor I get the idea to develop a app to help customers in a restaurant to order meals more easily.

## Tech Stack

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
</p>

## Features

In my app, customers can

- login
- go through the menus
- and find details of every menu in detail page
- add menus to shopping cart
- call the waiter to pay or pay online(through Stripe)
- checked history orders if they have logged in

<div align="center">
<img src="public/img/home.png" width="20%" height="20%" alt="home-page" />
<img src="public/img/menus.png" width="20%" height="20%" alt="menus-page" />
<img src="public/img/cart.png" width="20%" height="20%" alt="cart-page" />
</div>
<div align="center">
<img src="public/img/detail-1.png" width="20%" height="20%" alt="menus-page" />
<img src="public/img/detail-2.png" width="20%" height="20%" alt="menus-page" />
<img src="public/img/orders.png" width="20%" height="20%" alt="orders-page" />
</div>

### Login

Now I have not finished sign up page for customers, login only works with username: admin, password:admin. Login information is stored in MongoDB Atlas.

<p align="center">
<img src="public/img/login.png" width="30%" height="30%" alt="login" />
</p>

### payment

Customers can pay their bill by calling the waiter, or pay online throught Stripe.
For testing, you can use the following information to finish the payment.

- email: any email, like abc@123.com
- card number: 4242424242424242
- date: any date that later than today, like 12/23
- CVC: any three numbers, like 123

<p align="center">
<img src="public/img/payment.png" width="30%" height="30%" alt="payment" />
</p>

## Plans for the future

- Finish sign up for users
- Sign up with facebook,twitter and google
- Comments in detail page can be edited, also fotos can be uploaded
- Store all informatio in MongoDB Atlas
