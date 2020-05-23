import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Avatar from '@material-ui/core/Avatar';
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow"
import './Countries.css'


const useStyles = makeStyles((theme) => ({

  }));
export default class Countries extends Component {
    state = {
        page: 0,
        rowsPerPage: 10
      };
    
      columns = [
        { id: 'Country', label: 'Country' },
        { id: 'Date', label: 'LatestDate' },
        { id: 'NewConfirmed', label: 'NewConfirmed' },
        { id: 'NewDeaths', label: 'NewDeaths'},
        { id: 'NewRecovered', label: 'NewRecovered'},
        { id: 'TotalConfirmed', label: 'TotalConfirmed'},
        { id: 'TotalDeaths', label: 'TotalDeaths'},
        { id: 'TotalRecovered', label: 'TotalRecovered'},
        { id: "CountryCode", label: "ShowGraph"},
      ];
  
    
      classes = makeStyles({
        root: {
          width: "100%"
        },
        tableWrapper: {
          maxHeight: 440,
          overflow: "auto"
        },
        tableHeaderColor:{
          backgroundColor:"aqua"
        }
      });
    
      handleChangePage = (event, newPage) => {
        this.setState({
          page: newPage
        });
      };
    
      handleChangeRowsPerPage = event => {
        this.setState({
          rowsPerPage: +event.target.value,
          page: 0
        });
      };
    render() {
  
      console.log("this.props.countries", this.props.countries)
    return(
        <div>
        <div className="m-x-y">Covid-19 World Record</div>
        <Paper className={this.classes.root}>
          <div className={this.classes.tableWrapper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow  className={this.classes.tableHeaderColor}>
                  {this.columns.map(column => (
                    <TableCell
                      key={column.id}
                      // style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!this.props.countries.Countries
                  ? null
                  : Object.entries(this.props.countries.Countries)
                      .slice(
                        this.state.page * this.state.rowsPerPage,
                        this.state.page * this.state.rowsPerPage +
                          this.state.rowsPerPage
                      )
                      .map(row => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                          >
                            {this.columns.map(column => {                                                           
                              const value = row[1][column.id];                                                           
                              {if (column.id === 'CountryCode') {
                                  return (
                                  <TableCell>
                                      <Avatar 
                                            alt="flag" 
                                            src={`https://www.countryflags.io/${value}/flat/64.png`} 
                                            variant="square"
                                      /> 
                                  </TableCell>)
                              } else {
                                    return (
                                    <TableCell key={column.id}>
                                        {value}
                                    </TableCell>
                                    )
                              }}
                            })}
        
                          </TableRow>
                        );
                      })}
              </TableBody>
            </Table>
          </div>

          {this.props.countries.Countries && 
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={parseInt(this.props.countries.Countries.length)}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          ></TablePagination>
          }
        </Paper>
      </div>
    )
  }
}