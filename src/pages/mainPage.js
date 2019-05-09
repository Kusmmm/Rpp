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


import Board from "react-trello";
const data = {
    "lanes": [
        {
            "id": "PLANNED",
            "title": "21-05-2019",
            "label": "",
            "style": {
                "width": 280
            },
            "cards": [
                {
                    "id": "Milk",
                    "title": "Buy milk",
                    "label": "15 mins",
                    "description": "2 Gallons of milk at the Deli store",
                    "people": "123"
                },
                {
                    "id": "Plan2",
                    "title": "Dispose Garbage",
                    "label": "10 mins",
                    "description": "Sort out recyclable and waste as needed"
                },
                {
                    "id": "Plan3",
                    "title": "Write Blog",
                    "label": "30 mins",
                    "description": "Can AI make memes?"
                },
                {
                    "id": "Plan4",
                    "title": "Pay Rent",
                    "label": "5 mins",
                    "description": "Transfer to bank account"
                }
            ]
        },
        {
            "id": "WIP",
            "title": "Work In Progress",
            "label": "10/20",
            "style": {
                "width": 280
            },
            "cards": [
                {
                    "id": "Wip1",
                    "title": "Clean House",
                    "label": "30 mins",
                    "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
                }
            ]
        },
        {
            "id": "BLOCKED",
            "title": "Blocked",
            "label": "0/0",
            "style": {
                "width": 280
            },
            "cards": []
        },
        {
            "id": "COMPLETED",
            "title": "Completed",
            "style": {
                "width": 280
            },
            "label": "2/5",
            "cards": [
                {
                    "id": "Completed1",
                    "title": "Practice Meditation",
                    "label": "15 mins",
                    "description": "Use Headspace app"
                },
                {
                    "id": "Completed2",
                    "title": "Maintain Daily Journal",
                    "label": "15 mins",
                    "description": "Use Spreadsheet for now"
                }
            ]
        },
        {
            "id": "REPEAT",
            "title": "Repeat",
            "style": {
                "width": 280
            },
            "label": "1/1",
            "cards": [
                {
                    "id": "Repeat1",
                    "title": "Morning Jog",
                    "label": "30 mins",
                    "description": "Track using fitbit"
                }
            ]
        },
        {
            "id": "ARCHIVED",
            "title": "Archived",
            "style": {
                "width": 280
            },
            "label": "1/1",
            "cards": [
                {
                    "id": "Archived1",
                    "title": "Go Trekking",
                    "label": "300 mins",
                    "description": "Completed 10km on cycle"
                }
            ]
        },
        {
            "id": "ARCHIVED2",
            "title": "Archived2",
            "style": {
                "width": 280
            },
            "label": "1/1",
            "cards": [
                {
                    "id": "Archived2",
                    "title": "Go Jogging",
                    "label": "300 mins",
                    "description": "Completed 10km on cycle"
                }
            ]
        },
        {
            "id": "ARCHIVED3",
            "title": "Archived3",
            "style": {
                "width": 280
            },
            "label": "1/1",
            "cards": [
                {
                    "id": "Archived3",
                    "title": "Go Cycling",
                    "label": "300 mins",
                    "description": "Completed 10km on cycle"
                }
            ]
        }
    ]
}

const handleDragStart = (cardId, laneId) => {
    console.log('drag started')
    console.log(`cardId: ${cardId}`)
    console.log(`laneId: ${laneId}`)
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended')
    console.log(`cardId: ${cardId}`)
    console.log(`sourceLaneId: ${sourceLaneId}`)
    console.log(`targetLaneId: ${targetLaneId}`)
}

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};



@inject('store')
@observer
export default class MainPage extends Component {


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

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
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


                <div className="board-container">
                    <Board data={data}
                        draggable
                        handleDragStart={handleDragStart}
                        handleDragEnd={handleDragEnd}
                    />
                </div>

            </MuiThemeProvider>
        )
    }
}