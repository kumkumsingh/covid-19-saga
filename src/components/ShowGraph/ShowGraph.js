
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { baseUrl } from '../../../constants'
import './ShowGraph.css';

import axios from 'axios';
import { Line } from "react-chartjs-2";
const ShowGraph = ({value ,isShowing , hide}) =>{
  console.log('checking value',value)
    const id = value
    const [dailyData , setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = () => {
            axios.get(`${baseUrl}/dayone/country/${id}`)
            .then(res => {
                setDailyData(res.data );
              })
        };
        fetchApi();   
      },[]);
      const lineChart = ( dailyData ? (
        <Line
          data={{
            labels: dailyData.map(({ Date }) => Date),
            datasets: [
              {
                data: dailyData.map(({ Confirmed }) => Confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: dailyData.map(({ Deaths }) => Deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgb(255 , 0 , 0 , 0.5)",
                fill: true,
              },
            ],
          }}
        />
      ) : null );
      return(
        <div>
          {isShowing ? ReactDOM.createPortal(<React.Fragment>
              <div className="show-graph-popup-wrapper">
                <div className="show-graph-popup-container">
                <button onClick={hide} className="top-corner">
                  Close
                </button>
                {lineChart}
                </div>
              </div>
            </React.Fragment>, document.body
            ) : null}
        </div>
      )
}
export default ShowGraph;