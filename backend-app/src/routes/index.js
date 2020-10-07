const user = require('./user');

module.exports = (router) => {
    user(router);
    return router;
};
