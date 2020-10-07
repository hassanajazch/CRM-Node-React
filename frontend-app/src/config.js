require('dotenv').config();

const config = {
    env: process.env.APP_ENV || 'development',
    port: process.env.PORT || 3000,
    APIURL: process.env.APIURL || 'http://localhost:4000/api/',
};

export default config;
