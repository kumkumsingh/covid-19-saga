import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as actions from "../../actions/index";
import Countries from "./Countries";

const CountriesContainer = () => {
  const [country, setCountry ] = useState([])
  const [foundCountry, setFoundCountry ] = useState([])
  const dispatch = useDispatch();
  const CountriesResult = useSelector(state => state.countries)
  useEffect(() => {    
     dispatch(actions.countriesFetch())
    }, [])

    useEffect(()=> {
      setCountry(CountriesResult.Countries)
      setFoundCountry(CountriesResult.Countries) 
    }, [CountriesResult])

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
      <Countries
        countries={foundCountry}
        onChange={onChange}
      /> 
    </div>
  )
}
export default CountriesContainer;
