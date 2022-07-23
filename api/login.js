import bcrypt from 'bcrypt';

import connectToMongodb from '../src/backend/lib/connect-to-mongodb';
import {createToken} from '../src/backend/lib/jwt-service';
import User from '../src/backend/model/User';

export default async function loginHandler(request, response) {
  const {username, password} = request.body;

  if (!(username && password)) {
    return response.status(400).json('Username and password required');
  }

  await connectToMongodb();

  const user = await User.findOne({username});

  if (!user) {
    return response.status(400).json('User name or password is wrong!');
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return response.status(400).json('User name or password is wrong!');
  }

  const token = createToken(user);

  return response.status(200).json(token);
}
