import UserRepo from '../repositories/User';
import PasswordHandler from './PasswordHandler';
import { v4 as uuidv4 } from 'uuid';

export default class UserService {
    static async createUser(userData) {
        try {
            const hashPassword = await PasswordHandler.createHash(userData.password);

            userData.password = hashPassword;
            userData._id = uuidv4();

            await UserRepo.createUser(userData);

            return true;
        } catch (err) {
            throw err;
        }
    }

    static async loginUser(userData) {
        try {
            const user = await UserRepo.findUserByEmail(userData.email);

            if (user) {
                const passwordVerified = await PasswordHandler.verifyPassword(userData.password, user.password);
                if (passwordVerified) {
                    return user;
                }
                return false;
            }
            return false;
        } catch (err) {
            throw err;
        }
    }

    static async deleteUser(userId) {
        try {
            await UserRepo.deleteUser(userId);

            return true;
        } catch (err) {
            throw err;
        }
    }

    static async getAllUsers() {
        try {
            const users = await UserRepo.getAllUsers();

            return users;
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(user) {
        try {
            await UserRepo.updateUser(user);

            return true;
        } catch (err) {
            throw err;
        }
    }
}
