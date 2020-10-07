import UserService from '../app/services/User';
import UserRepo from '../app/repositories/User';

const createUser = async () => {
    try {
        const userCheck = await UserRepo.findUserByEmail('test@gmail.com');
        if (userCheck) {
            return true;
        }
        const user = {
            name: 'test',
            email: 'test@gmail.com',
            password: 'test',
            role: 'superadmin',
        };

        await UserService.createUser(user);

        return true;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default createUser;
