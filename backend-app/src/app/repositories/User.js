import userModel from '../../models/user';

export default class UserRepo {
    static async createUser(user) {
        try {
            await userModel.create(user);
        } catch (err) {
            throw err;
        }
    }

    static async findUserByEmail(userEmail) {
        try {
            const user = await userModel.find({ email: userEmail });

            return user[0] || false;
        } catch (err) {
            throw err;
        }
    }

    static async deleteUser(userId) {
        try {
            await userModel.deleteOne({ _id: userId });

            return true;
        } catch (err) {
            throw err;
        }
    }

    static async getAllUsers() {
        try {
            const users = await userModel.find({});

            return users;
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(user) {
        try {
            console.log('updating user', user);
            const result = await userModel.updateOne({ _id: user._id }, { email: user.email, name: user.name, role: user.role });

            console.log('donee', result);
            return true;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
