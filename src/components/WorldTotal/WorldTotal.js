import React from "react";
import "./WorldTotal.css";
import CountUp from "react-countup";
import { makeStyles } from '@material-ui/core/styles';
import cx from "classnames";
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
  infected:{
    borderBottom: '10px solid rgba(0, 0, 255,0.5)'
  },
  recovered:{
    borderBottom: '10px solid green'
  },
  deaths:{
    borderBottom: '10px solid rgba(255, 0, 0,0.5)'
  }

});
export default function WorldTotal(props) {
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = props.total;
    const classes = useStyles();
  // if (!props.total) return "loading...";
  return (
    <React.Fragment>
      {props.total.TotalConfirmed && (
        <div className="container">
        <Card className={cx(classes.root , classes.infected)}>
        <CardContent>
          <Typography className="Confirmed" gutterBottom>
            TotalConfirmed
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={TotalConfirmed}
              duration={2.5}
              separator=","
            />
          </Typography>
          </CardContent>
          </Card>
          <Card className={cx(classes.root , classes.recovered) }>
          <CardContent>
          <Typography className="Deaths" gutterBottom>
            TotalDeaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={TotalDeaths}
              duration={2.5}
              separator=","
            />
          </Typography>
          </CardContent>
          </Card>
          <Card className={cx(classes.root , classes.deaths) }>
          <CardContent>
          <Typography className="Recovered" gutterBottom>
            TotalRecovered
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={TotalRecovered}
              duration={2.5}
              separator=","
            />
          </Typography>
          </CardContent>
          </Card>
        </div>
      )}
      {/* Hello world total  */}
    </React.Fragment>
  );
}
