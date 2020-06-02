import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import Countries from "./Countries";
import { useMediaQuery } from 'react-responsive'
import CountriesMobile from './CountriesMobile'

const CountriesContainer = (props) => {
  const [country, setCountry ] = useState([])
  const [foundCountry, setFoundCountry ] = useState([])
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  useEffect(() => {    
     props.countriesFetch()
    }, [])

    useEffect(()=> {
      console.log('props.countries.Countries',props.countries.Countries)
      setCountry(props.countries.Countries)
      setFoundCountry(props.countries.Countries) 
    }, [props.countries.Countries])

  const onChange = (searchText) => {
    if (searchText !== "") {
      let countryArray = country.filter((res) =>
          res.Country.toUpperCase().includes(searchText.toUpperCase())
      )
      setFoundCountry(countryArray)
    }
  }
  return (
    <div>
    {isDesktopOrLaptop && <Countries
        countries={foundCountry}
        onChange={onChange}
      />
      }
    {isTabletOrMobileDevice && <CountriesMobile countries={foundCountry}  onChange={onChange}/> }
       
    </div>
  )
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
