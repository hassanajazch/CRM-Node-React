import React from 'react';
import LeadService from '../../service/Leads';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(() => ({
    dialogContent: {
        minHeight: '200px',
    },
    roleSelect: {
        marginTop: '20px',
    },
    roleSelectOptions: {
        minWidth: '150px',
    }
}));

/**
 * Form component for adding user
 * @returns {JSX.Element}
 * @constructor
 */

const AddLeadsForm = (props) => {
    const classes = useStyles();

    const handleSubmit = () => {
        if(props.formType === 'add') {
            const lead = {
                name: props.name,
                email: props.email,
                phone: props.phone,
            };

            LeadService.createLead(lead)
                .then(() => {
                    props.getAllLead();
                });

        } else if (props.formType === 'update') {
            const lead = {
                _id: props._id,
                name: props.name,
                email: props.email,
                phone: props.phone,
            };

            LeadService.editLead(lead)
                .then(() => {
                    props.getAllLead();
                });
        }

        props.handleCloseDialog();
    }


    return (
        <div>
            <Dialog open={props.open} onClose={props.handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className={classes.fontSize}>
                    {props.formType === 'add' ? 'Add Lead' : 'Update Lead'}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        value={props.name}
                        onChange={e => props.setName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        value={props.email}
                        onChange={e => props.setEmail(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        label="phone"
                        value={props.phone}
                        onChange={e => props.setPhone(e.target.value)}
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {props.formType === 'add' ? 'Add Lead' : 'Update Lead'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddLeadsForm;