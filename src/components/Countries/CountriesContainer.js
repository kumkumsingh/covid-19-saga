import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import Countries from './Countries'


class CountriesContainer extends Component {

    componentDidMount(){
        this.props.countriesFetch()
    }

    render() {
        return (
            <div>
               <Countries countries={this.props.countries}/> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('checking state in countries', state)
    return{
       countries: state.countries
    }
}

const mapDispatchToProps = dispatch => {
    return{
        countriesFetch: () => dispatch(actions.countriesFetch())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountriesContainer);