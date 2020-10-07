import axios from 'axios';
import config from "../config";

export default class User {
    /**
     * Get all users details
     * @returns {Promise<Array>} repos
     */
    static async GetAllUsers() {
        try {
            const APIURL = `${config.APIURL}user/getAllUsers`;
            const response = await axios.get(APIURL);

            if(response.status === 200) {
                return response.data;
            }
            return false;
        } catch (err) {
            return [];
        }
    }

    static async deleteUser(userId) {
        try {
            const APIURL = `${config.APIURL}user/deleteUser?userId=${userId}`;
            const response = await axios.delete(APIURL);

            if(response.status === 200) {
                return true;
            }
            return false;
        } catch (err) {
            return [];
        }
    }

    static async createUser(user) {
        try {
            const APIURL = `${config.APIURL}user/createUser`;
            const response = await axios.post(APIURL, user);

            if(response.status === 200) {
                return response.data;
            }
            return false;
        } catch (err) {
            return [];
        }
    }

    static async editUser(user) {
        try {
            const APIURL = `${config.APIURL}user/updateUser`;
            const response = await axios.put(APIURL, user);

            if(response.status === 200) {
                return response.data;
            }
            return false;
        } catch (err) {
            return [];
        }
    }
}