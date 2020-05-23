import React from 'react';
import { makeStyles , AppBar , Toolbar  ,CssBaseline} from '@material-ui/core';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
 logo:{
    marginRight: theme.spacing(2),
    width:'370px',
    marginTop: '10px'
 },
 header: {
    backgroundColor: "white",
}
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
            <CssBaseline />
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <img alt="Logo" src={logo} className={classes.logo} />
                </Toolbar>
            </AppBar>
    </React.Fragment>
  );
}