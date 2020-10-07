import axios from 'axios';
import config from "../config";

export default class User {
    /**
     * Get all users details
     * @returns {Promise<Array>} repos
     */
    static async getAllLeads() {
        try {
            const APIURL = `${config.APIURL}lead/getLeads`;
            const response = await axios.get(APIURL);

            if(response.status === 200) {
                return response.data;
            }
            return [];
        } catch (err) {
            return [];
        }
    }

    static async deleteLead(leadId) {
        try {
            const APIURL = `${config.APIURL}lead/deleteLead?leadId=${leadId}`;
            const response = await axios.delete(APIURL);

            if(response.status === 200) {
                return true;
            }
            return false;
        } catch (err) {
            return [];
        }
    }

    static async createLead(lead) {
        try {
            const APIURL = `${config.APIURL}lead/createLead`;
            const response = await axios.post(APIURL, lead);

            if(response.status === 200) {
                return response.data;
            }
            return false;
        } catch (err) {
            return [];
        }
    }

    static async editLead(lead) {
        try {
            const APIURL = `${config.APIURL}lead/updateLead`;
            const response = await axios.put(APIURL, lead);

            if(response.status === 200) {
                return response.data;
            }
            return false;
        } catch (err) {
            return [];
        }
    }
}