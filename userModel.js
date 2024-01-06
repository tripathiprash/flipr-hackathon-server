import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  // Other contact details...
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  contacts: [contactSchema], // Array of contacts
  // Other user fields...
});

const User = mongoose.model('User', userSchema);

export default User;
