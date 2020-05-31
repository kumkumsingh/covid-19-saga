
import React, { useState, useEffect } from "react";
import { baseUrl } from '../../../constants'

import axios from 'axios';
import { Line } from "react-chartjs-2";
export default function ShowGraph(props) {
    const id = props.match.params.id
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

      console.log('checking dailydata', dailyData)

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
    return (
        <div>
        {lineChart}
        </div>
    )
}
