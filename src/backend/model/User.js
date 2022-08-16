import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('User', schema);
