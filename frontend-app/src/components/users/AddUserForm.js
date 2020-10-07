import React from 'react';
import UserService from '../../service/User';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
    dialogContent: {
        minHeight: '300px',
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

const AddUserForm = (props) => {
    const classes = useStyles();

    const handleSubmit = () => {
        if(props.formType === 'add') {
            const user = {
                name: props.name,
                email: props.email,
                password: props.password,
                role: props.role,
            };

            UserService.createUser(user)
                .then(() => {
                    props.getAllUsers();
                });

        } else if (props.formType === 'update') {
            const user = {
                _id: props._id,
                name: props.name,
                email: props.email,
                role: props.role,
            };

            UserService.editUser(user)
                .then(() => {
                    props.getAllUsers();
                });
        }

        props.handleCloseDialog();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className={classes.fontSize}>
                    {props.formType === 'add' ? 'Add User' : 'Update User'}
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
                        fullWidth
                        value={props.email}
                        onChange={e => props.setEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="text"
                        fullWidth
                        value={props.password}
                        onChange={e => props.setPassword(e.target.value)}
                    />
                    <div className={classes.roleSelect}>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className={classes.roleSelectOptions}
                            value={props.role}
                            onChange={e => props.setRole(e.target.value)}
                        >
                            <MenuItem value={'superadmin'}>Super Admin</MenuItem>
                            <MenuItem value={'staff'}>Staff</MenuItem>
                        </Select>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {props.formType === 'add' ? 'Add User' : 'Update User'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddUserForm;