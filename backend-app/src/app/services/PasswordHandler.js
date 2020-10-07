import bcrypt from 'bcrypt';

export default class PasswordHandler {
    /**
     * hash password using bcrypt
     * @param password
     * @returns {Promise<*>}
     */
    static async createHash(password) {
        try {
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashPassword = bcrypt.hashSync(password, salt);

            return hashPassword;
        } catch (err) {
            throw err;
        }
    }

    /**
     * verify hash password
     * @param password
     * @param hash
     * @returns {Promise<*>}
     */
    static async verifyPassword(password, hash) {
        try {
            const result = bcrypt.compareSync(password, hash);

            return result;
        } catch (err) {
            throw err;
        }
    }
}
