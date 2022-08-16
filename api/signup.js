import bcrypt from 'bcrypt';

import connectToMongodb from '../src/backend/lib/connect-to-mongodb';
import {createToken} from '../src/backend/lib/jwt-service';
import User from '../src/backend/model/User';

export default async function loginHandler(request, response) {
  const {username, password} = request.body;
  const saltRounds = 10;

  if (!(username && password)) {
    return response.status(400).json('Username and password required');
  }

  await connectToMongodb();

  const user = await User.findOne({username});

  if (!user) {
    var newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: bcrypt.hash(req.body.password, saltRounds),
    });

    console.log('Save User');
    newUser.save();

    const token = createToken(user);
    return response.status(200).json(token);
  } else {
    return response.status(400).json('Username already exists!');
  }
}
