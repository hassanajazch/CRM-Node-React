import express from 'express';
import LeadController from '../controllers/Leads';

const router = express.Router({});

router.post('/createLead', LeadController.createLead);
router.get('/getLeads', LeadController.getLeads);
router.put('/updateLead', LeadController.updateLead);
router.delete('/deleteLead', LeadController.deleteLead);

module.exports = router;
