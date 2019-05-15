import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { observer, inject } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import 'react-big-scheduler/lib/css/style.css';
import moment from 'moment';
//pickers 
import { MuiPickersUtilsProvider, TimePicker, DatePicker, DateTimePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import "moment/locale/ru";
import Icon from '@material-ui/icons/ArrowBack';


//notifications
import { withSnackbar } from 'notistack';

moment.locale("ru");

const styles = {
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
        marginTop: 24,
        marginBottom: 20
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    menuButton:{
        marginLeft: -12,
        marginRight: 20,
    }
};

const formContainer = {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    width: 600,
    margin: 'auto'
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
class CreateTaskPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        // The first commit of Material-UI
        startTodo: new Date(),
        endTodo: new Date(),
        todoName: "",
        todoText: ""
    };

    handleStartDateChange = date => {
        console.log(name);
        this.setState({ ...this.state, startTodo: date });
    };

    handleEndDateChange = date => {
        console.log(name);
        this.setState({ ...this.state, endTodo: date });
    };
    handleChangeName = event => {
        this.setState({
            ...this.state,
            todoName: event.target.value,
        });
    };

    handleChange = event => {
        this.setState({
            ...this.state,
            todoText: event.target.value,
        });
    };

    saveTask() {
        if (this.state.todoName == "") {
            this.props.enqueueSnackbar('Ошибка! Заполните имя задачи', { variant: 'error' });
            return;
        }
        if (this.state.todoText == "") {
            this.props.enqueueSnackbar('Внимание! Описание задачи будет пустым. Уверены?', {
                variant: 'warning', action: (
                    <Button color="inherit" size="small" onClick={() => {
                        this.props.store.DemoData.events.push({

                            id: this.props.store.DemoData.events.length + 1,
                            start: this.state.startTodo,
                            end: this.state.endTodo,
                            resourceId: 'r0',
                            title: this.state.todoName,
                            bgColor: '#5BC0EB',
                            //showPopover: false

                        });
                        setTimeout(() => { this.props.history.push('/worker-main') }, 500);
                    }}>
                        ДА
                </Button>
                ),
            });
            return;
        }
        this.props.store.DemoData.events.push({

            id: this.props.store.DemoData.events.length + 1,
            start: this.state.startTodo,
            end: this.state.endTodo,
            resourceId: 'r0',
            title: this.state.todoName,
            bgColor: '#5BC0EB',
            //showPopover: false

        });
        setTimeout(() => { this.props.history.push('/worker-main') }, 500);
    }




    render() {


        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton color="inherit" aria-label="Menu" style={styles.menuButton} onClick={()=>{this.props.history.push('/worker-main')}}>
                            <Icon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Планировщик
                        </Typography>

                    </Toolbar>
                </AppBar>





                <div className="formContainer" style={formContainer}>
                    <TextField
                        id="todo-name"
                        label="Название"
                        placeholder="Название задачи"
                        multiline
                        style={styles.textField}
                        onChange={this.handleChangeName}
                    />
                    <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                        <Grid container justify="space-around">
                            <DateTimePicker
                                autoOk
                                ampm={false}

                                value={this.state.startTodo}
                                onChange={this.handleStartDateChange}
                                label="Дата и время начала"
                                style={styles.textField}
                            />
                            <DateTimePicker
                                autoOk
                                ampm={false}
                                value={this.state.endTodo}
                                onChange={this.handleEndDateChange}
                                label="Дата и время конца"
                                style={styles.textField}
                            />

                        </Grid>
                    </MuiPickersUtilsProvider>



                    <TextField
                        id="todo-text"
                        label="Описание задачи"
                        multiline
                        rowsMax="12"
                        value={this.state.todoText}
                        onChange={this.handleChange}
                        style={styles.textField}
                        margin="normal"
                        helperText="Краткое описание поставленной задачи задачи"
                        variant="outlined"
                    />


                    <Button variant="contained" color="primary" onClick={() => { this.saveTask() }}>
                        <div>Создать</div>
                    </Button>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default withSnackbar(CreateTaskPage);