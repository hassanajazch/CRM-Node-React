import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from 'js-cookie';

// Components
import Users from './users/Users';
import Leads from './leads/Leads';
import AppBar from "./AppBar";
import UserLogin from "./login/UserLogin";

// Material-UI
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    appContainer: {
        backgroundColor: '#f1ebeb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        minHeight: '100vh',
    },
}));


const App = () => {
    const classes = useStyles();
    const [isLogin, setIsLogin] = useState(false);
    const loginState = Cookies.get('isLogin');

    return (
        <Router>
            <div className={classes.appContainer}>
                {isLogin === true || loginState === true? <AppBar setIsLogin={setIsLogin}/> : <></>}
                <Switch>
                    <Route path="/users" > <Users/> </Route>
                    <Route path="/leads" > <Leads/> </Route>
                    <Route path={"/login" | "/"}><UserLogin setIsLogin={setIsLogin}/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
