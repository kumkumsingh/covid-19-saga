import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import Countries from "./Countries";

class CountriesContainer extends Component {
  state = {
    searchCountry: "",
    country: [],
    foundCountry:[],
  };

  componentDidMount() {
    this.props.countriesFetch();
    console.log("component did mount")
    setTimeout(() => {
      this.setState({
        country: this.props.countries.Countries,
        foundCountry: this.props.countries.Countries
      })
      console.log('foundcountry count',this.state.foundCountry)
     } , 1000) 
  }
  onChange = (searchText) => {
    // this.setState({
    //   searchCountry: searchText
    // })   
    if (searchText !== "") {
      console.log("componentchange")
      let countryArray = this.state.country.filter((res) =>
          res.Country.toUpperCase().includes(event.target.value.toUpperCase())
      )
      setTimeout(() => {
        this.setState({
          searchCountry: searchText,
          foundCountry: countryArray
        }) 
      }, 50)
      // console.log('foundcountry',this.state.foundCountry)
    }
  };
  render() {
    {this.state.foundCountry ? 
        console.log('foundcountry count',this.state.foundCountry) :
        console.log('foundcountry count zero')}
    console.log("this.state.searcCountry",this.state.searchCountry)
    return (
      <div>
        <Countries
          countries={this.state.foundCountry}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("checking state in countries", state);
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countriesFetch: () => dispatch(actions.countriesFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
