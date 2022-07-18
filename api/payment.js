import Stripe from 'stripe';
import {v4 as uuidv4} from 'uuid';

const stripe = new Stripe(process.env.SECRET_KEY);

const paymentHandler = async (request, response) => {
  const {order, token} = request.body;
  const idempotencyKey = uuidv4();
  const {method} = request;

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
      .then(result => response.status(200).json(result))
      .catch(error => response.status(400).json(error));
  }
};

export default paymentHandler;
