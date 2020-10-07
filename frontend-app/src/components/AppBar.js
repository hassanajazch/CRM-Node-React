import React from 'react';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    appBar: {
        marginTop: '20px',
        width: '100%',
        height: '50px',
        borderBottomColor: 'black',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',

    },
    appBarGrid: {
        marginLeft: '160px',
    },
    appBarText: {
        fontWeight: '600',
        fontSize: '1rem',
    },
    logoutButton: {
        marginLeft: '70%',
    }
});

export default function AppBar(props) {
    const classes = useStyles();
    let history = useHistory();
    const role = Cookies.get('role');

    const handleLogoutClick = () => {
        Cookies.remove('email');
        Cookies.set('isLogin', false);
        Cookies.remove('role');
        props.setIsLogin(false);

        history.push('/login');
    }

    return (
        <div className={classes.appBar}>
            <Grid container spacing={2}  className={classes.appBarGrid} direction="row" justify="flex-end" alignItems="center">
                {role === 'superadmin' ?
                    <Grid item xs={1}>
                        <Link to="/users">
                            <Button className={classes.appBarText} color="primary">
                                Users
                            </Button>
                        </Link>
                    </Grid> :
                    <Grid></Grid>
                }
                <Grid item xs={1} justify="flex-end" >
                    <Link to="/leads">
                        <Button  className={classes.appBarText} color="primary">
                            Leads
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={10} justify="flex-end" >
                    <Button
                        className={classes.logoutButton}
                        variant="contained"
                        color="primary"
                        onClick={handleLogoutClick}
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}