const app = require('./expressApp');
const userRoutes = require('../routes/user');
const leadRoutes = require('../routes/lead');

app.use('/api/user', userRoutes);
app.use('/api/lead', leadRoutes);

module.exports = app;
