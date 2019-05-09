import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';

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
export default class LoginPage extends Component {

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
            this.props.history.push('/main');
        }


    }
    render() {

        return (
            <MuiThemeProvider theme={theme}>
                <div style={centerCard}>
                    <Paper className={styles.paper} style={form}>
                        <div className="formContainer" style={formContainer}>
                            <TextField
                                id="standard-textarea"
                                label="логин"
                                placeholder="user@mail.com"
                                multiline
                                className={styles.textField}
                                margin="normal"
                                inputRef={(ref) => this.mail = ref}
                            />
                            <TextField
                                id="standard-password-input"
                                label="пароль"
                                className={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                inputRef={(ref) => this.password = ref}
                            />
                            <Button variant="contained" color="primary" onClick={() => { this.login() }}>
                                <div>Войти</div>
                            </Button>
                        </div>

                    </Paper>
                </div>
            </MuiThemeProvider>


        )
    }
}