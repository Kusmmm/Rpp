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

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    }
};

@inject('store')
@observer
class WorkerMainPage extends Component {
    constructor(props) {
        super(props);
        moment.locale('ru');
        let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week, false, false, {
            eventItemPopoverEnabled: true,
            views: []
        }, {
                isNonWorkingTimeFunc: this.isNonWorkingTime
            }, moment);
       
        schedulerData.setResources(this.props.store.DemoData.resources);
        schedulerData.setEvents(this.props.store.DemoData.events);
        this.state = {
            viewModel: schedulerData,
        }
    }

    isNonWorkingTime = (schedulerData, time) => {
        const { localeMoment } = schedulerData;
        if (schedulerData.viewType === ViewTypes.Day) {
            let hour = localeMoment(time).hour();
            if (hour < 9 || hour > 18)
                return true;
        }
        else {
            let dayOfWeek = localeMoment(time).weekday();
            if (dayOfWeek === 5 || dayOfWeek === 6)
                return true;
        }

        return false;
    }

    createTask(){
        this.props.history.push('/create-task');
    }
   



    render() {

        const { viewModel } = this.state;
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
                <AppBar position="static" color="inherit">
                    <Toolbar variant="dense">
                        <Button color="inherit"><Icon style={styles.leftIcon}></Icon>Профиль</Button>


                        <Button color="inherit" onClick={()=>{this.createTask()}}>Создать задачу</Button>
                        
                    </Toolbar>
                </AppBar>

                <CalendarDesk data={this.props.store.DemoData} schedulerData={viewModel}/>

            </MuiThemeProvider>
        )
    }
}
export default withDragDropContext(WorkerMainPage)