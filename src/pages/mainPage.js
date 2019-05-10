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
                    "title": " Заголовок карточки 1",
                    "label": "15 mins",
                    "description": "Описание карточки",
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
                    "title": "Сделать пост",
                    "label": "30 mins",
                    "description": "Can AI make memes?"
                },
                {
                    "id": "Plan4",
                    "title": "Сделать бд",
                    "label": "5 mins",
                    "description": "рыолрвафлорвылфо"
                }
            ]
        },
        {
            "id": "WIP",
            "title": "Сделать рапапа",
            "label": "Описание",
            "style": {
                "width": 280
            },
            "cards": [
                {
                    "id": "Wip1",
                    "title": "ПРодать душу дьяволу",
                    "label": "30 mins",
                    "description": "Получаем все лабы и идём сдавать"
                }
            ]
        },
        {
            "id": "BLOCKED",
            "title": "Получаем люлей",
            "label": "0/0",
            "style": {
                "width": 280
            },
            "cards": []
        },
        {
            "id": "COMPLETED",
            "title": "Осознаём ошибку и делаем всё заново",
            "style": {
                "width": 280
            },
            "label": "2/5",
            "cards": [
                {
                    "id": "Completed1",
                    "title": "Мяяяя",
                    "label": "15 mins",
                    "description": "Привет от Сани"
                },
                {
                    "id": "Completed2",
                    "title": "Хочу спатеньки",
                    "label": "15 mins",
                    "description": "Но надо делать дз"
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
                    "title": "Сходить к ветеринару",
                    "label": "30 mins",
                    "description": "Научиться гавкать"
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
                    "title": "Поиграть",
                    "label": "300 mins",
                    "description": "На нервах"
                }
            ]
        },
        {
            "id": "ARCHIVED2",
            "title": "Делать дз",
            "style": {
                "width": 280
            },
            "label": "1/1",
            "cards": [
                {
                    "id": "Archived2",
                    "title": "Убить Артёма",
                    "label": "300 mins",
                    "description": "холодным оружием"
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
                    "title": "выкупит душу",
                    "label": "300 mins",
                    "description": "обратно"
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