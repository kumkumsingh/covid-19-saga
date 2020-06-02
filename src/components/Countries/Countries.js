import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import showGraphModal from "../../showGraphModal";
import ShowGraph from "../ShowGraph/ShowGraph";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Avatar,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import "./Countries.css";

export default function Countries(props) {
  const { isShowing, toggle } = showGraphModal();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    props.onChange(e.target.value);
  };
  const columns = [
    { id: "Country", label: "Country" },
    { id: "Date", label: "LatestDate" },
    { id: "NewConfirmed", label: "NewConfirmed" },
    { id: "NewDeaths", label: "NewDeaths" },
    { id: "NewRecovered", label: "NewRecovered" },
    { id: "TotalConfirmed", label: "TotalConfirmed" },
    { id: "TotalDeaths", label: "TotalDeaths" },
    { id: "TotalRecovered", label: "TotalRecovered" },
    { id: "CountryCode", label: "ShowGraph" },
  ];

  const classes = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    tableWrapper: {
      maxHeight: 440,
      overflow: "auto",
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
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
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className={classes.tableHeaderColor}>
                {columns.map((column, ind) => (
                  <TableCell
                    key={ind}
                    // style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!props.countries
                ? null
                : Object.entries(props.countries)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          {columns.map((column, ind) => {
                            const value = row[1][column.id];
                            {
                              if (column.id === "CountryCode") {
                                return (
                                  <TableCell key={ind}>
                                    {/* <Link to={`/showgraph/${value}`}> */}
                                    <Avatar
                                      alt="flag"
                                      src={`https://www.countryflags.io/${value}/flat/64.png`}
                                      variant="square"
                                      onClick={toggle}
                                    />
                                    <ShowGraph
                                      value={value}
                                      isShowing={isShowing}
                                      hide={toggle}
                                    />
                                    {/* </Link> */}
                                  </TableCell>
                                );
                              } else {
                                return <TableCell key={ind}>{value}</TableCell>;
                              }
                            }
                          })}
                        </TableRow>
                      );
                    })}
            </TableBody>
          </Table>
        </div>

        {props.countries && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={parseInt(props.countries.length)}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "previous page",
            }}
            nextIconButtonProps={{
              "aria-label": "next page",
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          ></TablePagination>
        )}
      </Paper>
    </div>
  );
}
