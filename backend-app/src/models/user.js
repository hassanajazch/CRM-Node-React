import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: { type: String, unique: true },
    password: String, // hash password
    role: String,

});

const User = mongoose.model('User', userSchema);

export default User;
