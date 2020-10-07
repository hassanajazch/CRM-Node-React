import axios from 'axios';
import config from '../config';

export default class Login {
    /**
     * handle user login
     * @returns {Promise<Array>} repos
     */
    static async userLogin(data) {
        try {
            const APIURL = `${config.APIURL}user/login`;
            const response = await axios.post(APIURL, data);

            if(response.status === 200) {
                return response.data;
            }
            return false;
        } catch (err) {
            console.log(err);
        }
    }
}