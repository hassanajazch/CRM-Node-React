import React, {useEffect, useState} from 'react';
import AddLeadsForm from './AddLeadsForm';
import LeadsList from './LeadsList';
import LeadService from '../../service/Leads';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    progressBar: {
        position: 'absolute',
        marginLeft: '20%',
        marginTop: '10%',
    },
    heading: {
        marginTop: '40px',
    },
    button: {
        width: '120px'
    },
    buttonPadding: {
        paddingLeft: '5%'
    },
}));

/**
 * Heading and button for adding user
 * @returns {JSX.Element}
 * @constructor
 */
const Leads = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [_id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [leadsList, setLeadsList] = useState([]);
    const [formType, setFormType] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
        setFormType('add');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getAllLead = () => {
        try {
            LeadService.getAllLeads()
                .then(leads => {
                    setLeadsList(leads);
                });
        } catch (err)  {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllLead();
    },[]);

    const deleteLead = (leadId) => {
        LeadService.deleteLead(leadId)
            .then(() => {
                LeadService.getAllLeads()
                    .then(leads => {
                        setLeadsList(leads);
                    });
            });
    }

    const editLead = (lead) => {
        try {
            setOpen(true);
            setId(lead._id);
            setName(lead.name);
            setEmail(lead.email);
            setPhone(lead.phone);
            setFormType('update');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={classes.heading}>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Typography color='primary' variant='h4' component='h1' gutterBottom>
                        Leads
                    </Typography>
                </Grid>
                <Grid item xs={3} justify="flex-end" className={classes.buttonPadding}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleClickOpen}>
                        Add Leads
                    </Button>
                </Grid>
            </Grid>
            <AddLeadsForm
                open={open}
                handleOpenDialog={handleClickOpen}
                handleCloseDialog={handleClose}
                _id={_id}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                formType={formType}
                getAllLead={getAllLead}
            />
            <LeadsList
                leadsList={leadsList}
                deleteLead={deleteLead}
                editLead={editLead}
            />
        </div>
    )
}

export default Leads;