import React, { useState }  from "react";
import "./Countries.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function CountriesMobile(props) {
    
    const [searchText, setSearchText] = useState("");

    const updateSearchText = (e) => {
      setSearchText(e.target.value);
      props.onChange(e.target.value);
    };
  return (
    <div>
     <div className="m-x-y">
        Search Country Result
        <input
          className="m-x-y input-search"
          type="text"
          placeholder="Enter country name"
          name="searchCountry"
          onChange={updateSearchText}
          value={searchText}
        ></input>
      </div>
      {!props.countries
        ? null
        : props.countries.map((country, index) => {
            console.log("country", country);
            return (
                <Card className="countries-container">
                  <CardContent className="grid-item">
                    <Typography color="textSecondary" gutterBottom>
                      Country Name
                    </Typography>
                    <Typography variant="h5">{country.Country}</Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Infected
                    </Typography>
                    <Typography variant="h5">
                      {country.TotalConfirmed}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Date
                    </Typography>
                    <Typography color="textSecondary">
                      {country.Date}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Total Recovered
                    </Typography>
                    <Typography variant="h5">
                      {country.TotalRecovered}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Total Deaths
                    </Typography>
                    <Typography variant="h5">{country.TotalDeaths}</Typography>
                  </CardContent>
                </Card>
            );
          })}
    </div>
  );
}
