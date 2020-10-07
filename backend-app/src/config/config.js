require('dotenv').config();

const config = {
    env: process.env.APP_ENV || 'development',
    port: process.env.PORT || 4000,
    mongoDBURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/CRM',
};

export default config;
