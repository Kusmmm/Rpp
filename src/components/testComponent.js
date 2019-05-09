import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
export default class TestComponent extends Component{
    render(){
        return(
            <div>i`m test component!</div>
        )
    }
}