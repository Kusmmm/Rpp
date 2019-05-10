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



@inject('store')
@observer
class MainPage extends Component {
    constructor(props) {
        super(props);

        let DemoData = {
            resources: [
                {
                    id: 'r0',
                    name: 'Мои задачи',
                    //groupOnly: true
                }
            ],
            events: [
                {
                    id: 1,
                    start: '2019-05-10 09:30:00',
                    end: '2019-05-10 10:30:00',
                    resourceId: 'r0',
                    title: 'хоршая задача',
                    bgColor: '#74D971',
                },
                {
                    id: 4,
                    start: '2019-05-05 09:30:00',
                    end: '2019-05-06 8:30:00',
                    resourceId: 'r0',
                    title: 'тест тест тест',
                    bgColor: '#5BC0EB',
                    //showPopover: false
                },
                {
                    id: 5,
                    start: '2019-05-05 09:30:00',
                    end: '2019-05-06 8:30:00',
                    resourceId: 'r0',
                    title: 'тест fndskj тест',
                    bgColor: '#5BC0EB',
                    //showPopover: false
                },
                
                {
                    id: 2,
                    start: '2019-05-05 09:30:00',
                    end: '2019-05-15 8:30:00',
                    resourceId: 'r0',
                    title: 'тест тест тест',
                    bgColor: '#FDE74C',
                    //showPopover: false
                }
                ,{
                    id: 3,
                    start: '2019-05-01 09:30:00',
                    end: '2019-05-08 11:30:00',
                    resourceId: 'r0',
                    title: 'плохая задача',
                    bgColor: '#DD5B3C',
                    //showPopover: false
                },
                {
                    id: 6,
                    start: '2019-05-06 09:30:00',
                    end: '2019-05-08 8:30:00',
                    resourceId: 'r0',
                    title: 'тест vsdp тест',
                    bgColor: '#5BC0EB',
                    //showPopover: false
                },
            ]

        }
        this.state = {
            DemoData: DemoData
        }
    }
    prevClick = (schedulerData) => {
        schedulerData.prev();
        schedulerData.setEvents(this.state.DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData) => {
        schedulerData.next();
        schedulerData.setEvents(this.state.DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(this.state.DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(this.state.DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }
    eventItemClick = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    login() {
        console.log('login...');
        let pass = this.password.value;
        let mail = this.mail.value;

        console.log(pass);
        console.log(mail);

        if (!pass || !mail) {

            //this.props.store.sendToast('Введите логин и пароль');
            return (0);
        } else {

        }
    }
    render() {
        let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week,false, false, undefined);
        //set locale moment to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).
        moment.locale('ru');
        schedulerData.setLocaleMoment(moment);
        //set resources here or later
        let resources = [
            {
                id: 'r0',
                name: 'Мои задачи',
                groupOnly: true
            }
        ];
        schedulerData.setResources(resources);
        //set events here or later, 
        //the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
        schedulerData.setEvents(this.state.DemoData.events);

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Планировщик
                        </Typography>

                    </Toolbar>
                </AppBar>
                <AppBar position="static" color="inherit">
                    <Toolbar variant="dense">

                        <Button color="inherit">Создать задачу</Button>
                        <Button color="inherit">Создать колонку</Button>
                    </Toolbar>
                </AppBar>

                <Scheduler schedulerData={schedulerData}
                    prevClick={this.prevClick}
                    nextClick={this.nextClick}
                    onSelectDate={this.onSelectDate}
                    onViewChange={this.onViewChange}
                    eventItemClick={this.eventClicked}
                />

            </MuiThemeProvider>
        )
    }
}
export default withDragDropContext(MainPage)