import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mainStore from './stores/mainStore';
import LoginPage from './pages/LoginPage';
import WorkerMainPage from './pages/WorkerMainPage';
import ManagerMainPage from './pages/ManagerMainPage';
import CreateTaskPage from './pages/CreateTaskPage';
import { SnackbarProvider } from 'notistack';

class App extends React.Component {
    render() {
        return (
            <Provider store={mainStore}>
                <SnackbarProvider maxSnack={3}>
                    <Router>
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/login/" component={LoginPage} />
                        <Route path="/worker-main/" component={WorkerMainPage} />
                        <Route path="/manager-main/" component={ManagerMainPage} />
                        <Route path="/create-task/" component={CreateTaskPage} />
                    </Router>
                </SnackbarProvider>
            </Provider>
        );
    }
}
export default App
