import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import {HomePage, ShowGraph, Component404} from './components/index'

export default class App extends Component {
    render() {
        return (
            <div>
              <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/showgraph/:id"  component={ShowGraph} />
                    <Route component={Component404} />
                </Switch>
            </div>
        )
    }
}
