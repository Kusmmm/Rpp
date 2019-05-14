import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';


import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here 
import 'react-big-scheduler/lib/css/style.css';
import moment from 'moment';
import withDragDropContext from '../components/withDnDContext';



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
class CalendarDesk extends Component {
    constructor(props) {
        super(props);

        let DemoData = this.props.data;
        let schedulerData = this.props.schedulerData; 

        this.state = {
            viewModel: schedulerData,
            DemoData: DemoData
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

    ops1 = (schedulerData, event) => {
        alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
        alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };


    render() {

        const { viewModel } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <Scheduler schedulerData={viewModel}
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
export default withDragDropContext(CalendarDesk)