import cors from 'cors';
require('dotenv').config();

const stripe = require('stripe')(process.env.SECRET_KEY);
import {v4 as uuidv4} from 'uuid';

const paymentHandler = async (request, response) => {
  const {order, token} = request.body;
  const idempotencyKey = uuidv4();

  if (method === 'POST') {
    return stripe.customers
      .create({
        email: token.email,
        source: token.id,
      })
      .then(customer => {
        stripe.charges.create(
          {
            amount: order.price * 100,
            currency: 'eur',
            customer: customer.id,
            receipt_email: token.email,
            description: `pay for order ${token.id}`,
          },
          {idempotencyKey}
        );
      })
      .then(result => res.status(200).json(result))
      .catch(error => response.status(400).json(error));
  }
};

export default paymentHandler;
