import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observer, inject } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';

// cards
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here 
import 'react-big-scheduler/lib/css/style.css';
import moment from 'moment';
import withDragDropContext from '../components/withDnDContext';


//icons 
import Icon from '@material-ui/icons/AccountCircle';

import CalendarDesk from '../components/calendarDesk';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: 'auto',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const formContainer = {
    display: 'flex',
    flexDirection: 'column',
    padding: 8
}

const centerCard = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '-webkit-fill-available'
}

const form = {
    margin: 'auto',
    width: 400
}
@inject('store')
@observer
export default class CreateTaskPage extends Component {
    constructor(props) {
        super(props);
    }

    saveTask() {

    }




    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton color="inherit" aria-label="Menu" style={styles.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Планировщик
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Paper className={styles.paper} style={form}>
                    <div className="formContainer" style={formContainer}>
                        <TextField
                            id="standard-textarea"
                            label="название"
                            placeholder="user@mail.com"
                            multiline
                            className={styles.textField}
                            margin="normal"
                            inputRef={(ref) => this.mail = ref}
                        />
                        
                        <Button variant="contained" color="primary" onClick={() => { this.saveTask() }}>
                            <div>Создать</div>
                        </Button>
                    </div>

                </Paper>


            </MuiThemeProvider>
        )
    }
}
