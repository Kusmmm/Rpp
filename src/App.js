import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mainStore from './stores/mainStore';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/mainPage';


class App extends React.Component {
    render() {
        return (
            <Provider store={mainStore}>
                <Router>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/login/" component={LoginPage} />
                    <Route path="/main/" component={MainPage} />
                </Router>
                
            </Provider>
        );
    }
}
export default App
