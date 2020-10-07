import UserService from '../app/services/User';

const UserController = {};

/**
 * Add users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

UserController.createUser = async (req, res) => {
    try {
        await UserService.createUser(req.body);

        res.status(200).send('user added successfully');;
    } catch (err) {
        // We can add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to add user');
    }
};

/**
 * login user controller
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
UserController.loginUser = async (req, res) => {
    try {
        const result = await UserService.loginUser(req.body);

        if (result) {
            return res.json(result);
        }

        res.status(401).send('Unable to login, Password is incorrect');
    } catch (err) {
        console.log(err);
        res.status(400).send('Unable to login');
    }
};

UserController.deleteUser = async (req, res) => {
    try {
        const { userId } = req.query;
        if (userId) {
            await UserService.deleteUser(userId);

            return res.status(200).send('deleted successfully');
        }

        res.status(400).send('Unable to delete user');
    } catch (err) {
        console.log(err);
        res.status(400).send('Unable to login');
    }
};

// eslint-disable-next-line consistent-return
UserController.getAllUsers = async (req, res) => {
    try {
        const result = await UserService.getAllUsers();

        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(400).send('Unable to find all users');
    }
};

// eslint-disable-next-line consistent-return
UserController.updateUser = async (req, res) => {
    try {
        const updatedUser = req.body;
        await UserService.updateUser(updatedUser);

        res.status(200).send('user updated');
    } catch (err) {
        console.log(err);
        res.status(400).send('Unable to update users');
    }
};

export default UserController;
