import React, {useEffect, useState} from 'react';
import AddUserForm from './AddUserForm';
import UsersList from './UsersList';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import UserService from "../../service/User";

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
const Users = () => {
    const classes = useStyles();
    const [_id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [formType, setFormType] = useState('');
    const [open, setOpen] = React.useState(false);
    const [userList, setUserList] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
        setFormType('add');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getAllUsers = () => {
        try {
            UserService.GetAllUsers()
                .then(usersData => {
                    setUserList(usersData);
                });
        } catch (err)  {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllUsers();
    },[]);

    const deleteUser = (userId) => {
        try {
            UserService.deleteUser(userId)
                .then(() => {
                    UserService.GetAllUsers()
                        .then(usersData => {
                            setUserList(usersData);
                        });
                });
        } catch (err) {
            console.log(err);
        }
    }

    const editUser = (user) => {
        try {
            setOpen(true);
            setId(user._id);
            setName(user.name);
            setEmail(user.email);
            setPassword('---');
            setRole(user.role);
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
                        User
                    </Typography>
                </Grid>
                <Grid item xs={3} justify="flex-end" className={classes.buttonPadding}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleClickOpen}>
                        Add User
                    </Button>
                </Grid>
            </Grid>
            <AddUserForm
                open={open}
                handleOpenDialog={handleClickOpen}
                handleCloseDialog={handleClose}
                getAllUsers={getAllUsers}
                _id={_id}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                role={role}
                setRole={setRole}
                formType={formType}
            />
            <UsersList
                userList={userList}
                deleteUser={deleteUser}
                editUser={editUser}
            />
        </div>
    )
}

export default Users;