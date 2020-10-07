import config from './config/config';
const server = require('./server');
import chalk from 'chalk';

server.listen(`${config.port}`, () => {
    console.log(`Server now listening at localhost:${config.port} ${chalk.green('✓✓')}`);
});
