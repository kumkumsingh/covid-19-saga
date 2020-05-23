import React, { Component } from 'react'
import { Header , Footer , WorldTotal , CountriesContainer} from './components/index'

export default class App extends Component {
    render() {
        return (
            <div>
              <Header/> 
              <WorldTotal/>
              <CountriesContainer/> 
              <Footer/>
            </div>
        )
    }
}
