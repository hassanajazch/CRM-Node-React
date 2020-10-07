import LeadRepo from '../repositories/Lead';
import { v4 as uuidv4 } from 'uuid';

export default class LeadService {
    static async createLead(data) {
        try {
            data._id = uuidv4();

            await LeadRepo.createLead(data);

            return true;
        } catch (err) {
            throw err;
        }
    }

    static async getAllLeads() {
        try {
            const leads = await LeadRepo.getAllLeads();

            return leads;
        } catch (err) {
            throw err;
        }
    }

    static async updateLead(data) {
        try {
            await LeadRepo.updateLead(data);

            return true;
        } catch (err) {
            throw err;
        }
    }

    static async deleteLead(leadId) {
        try {
            await LeadRepo.deleteLead(leadId);

            return true;
        } catch (err) {
            throw err;
        }
    }
}
