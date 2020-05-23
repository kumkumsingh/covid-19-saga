import React from "react";
import MaterialTable from 'material-table';
import './Countries.css'

export default function Countries1(props) {
  console.log("checking props in form", props.countries);

  // const { Country } = props;
 

  //old one
//   return (
//     <React.Fragment>
//       {props.countries && (
//         <ul>
//           {props.countries.map((country, index) => (
//             <div>
//             <li key={index}>{country.Country}</li>
//             <li>{country.ISO2}</li>
//             </div>
//           ))}
//         </ul>
//       )}
//     </React.Fragment>
//   );

const [state, setState] = React.useState({
    
    columns: [
      { title: 'Country Name', field: 'Country' },
      { title: 'Date', field: 'Date' },
      { title: 'NewConfirmed', field: 'NewConfirmed', type: 'numeric' },
      { title: 'NewDeaths', field: 'NewDeaths', type: 'numeric' },
      { title: 'NewRecovered', field: 'NewRecovered', type: 'numeric' },
      { title: 'TotalConfirmed', field: 'TotalConfirmed', type: 'numeric' },
      { title: 'TotalDeaths', field: 'TotalDeaths', type: 'numeric' },
      { title: 'TotalRecovered', field: 'TotalRecovered', type: 'numeric' }
    //   { title: 'Show Graph', field: 'graph'},
    ],
    
     data: [ {country: "props.countries[0].country "}]
  });

  return (
    <>
    {props.countries.length && 
    <MaterialTable
      className="margin"
      title="Countries Result"
      columns={state.columns}
      data={query => 
      new Promise((resolve, reject) => {
        resolve({
                data: props.countries,
                page: 0,
                totalCount:props.countries.length
            });
      })}
      options={{
          headerStyle: {
            backgroundColor: 'aqua',
            color: 'black'
          },
          filtering: true
        }}
      // editable={{
      //   onRowAdd: (newData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.push(newData);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      //   onRowUpdate: (newData, oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         if (oldData) {
      //           setState((prevState) => {
      //             const data = [...prevState.data];
      //             data[data.indexOf(oldData)] = newData;
      //             return { ...prevState, data };
      //           });
      //         }
      //       }, 600);
      //     }),
      //   onRowDelete: (oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.splice(data.indexOf(oldData), 1);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      // }}
    />}
  </>
  );
}

