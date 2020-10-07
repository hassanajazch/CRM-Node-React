import leadModel from '../../models/leads';

export default class LeadRepo {
    /**
     * create lead data in database
     * @param data
     * @returns {Promise<boolean>}
     */
    static async createLead(data) {
        try {
            await leadModel.create(data);

            return true;
        } catch (err) {
            throw err;
        }
    }

    /**
     * get all leads from database
     * @returns {Promise<*>}
     */
    static async getAllLeads() {
        try {
            const leads = await leadModel.find({});

            return leads;
        } catch (err) {
            throw err;
        }
    }

    static async updateLead(data) {
        try {
            await leadModel.updateOne({ _id: data._id }, { name: data.name, email: data.email });

            return true;
        } catch (err) {
            throw err;
        }
    }

    static async deleteLead(leadId) {
        try {
            await leadModel.deleteOne({ _id: leadId });

            return true;
        } catch (err) {
            throw err;
        }
    }
}
