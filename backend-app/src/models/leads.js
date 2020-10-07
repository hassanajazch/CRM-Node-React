import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    phone: String,

});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
