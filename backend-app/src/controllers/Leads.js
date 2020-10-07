import LeadService from '../app/services/Lead';

const LeadController = {};

/**
 * Add Leads
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

LeadController.createLead = async (req, res) => {
    try {
        await LeadService.createLead(req.body);

        res.status(200).send('Lead added successfully');
    } catch (err) {
        // We can add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to add Lead');
    }
};

/**
 * get all leads
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
LeadController.getLeads = async (req, res) => {
    try {
        const result = await LeadService.getAllLeads();

        res.json(result);
    } catch (err) {
        // We can add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to get Lead');
    }
};

LeadController.updateLead = async (req, res) => {
    try {
        await LeadService.updateLead(req.body);

        res.status(200).send('Lead updated successfully');
    } catch (err) {
        console.log(err);
        res.status(400).send('Unable to update Lead');
    }
};

LeadController.deleteLead = async (req, res) => {
    try {
        await LeadService.deleteLead(req.query.leadId);

        res.status(200).send('Lead deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(400).send('Unable to delete Lead');
    }
};


export default LeadController;
