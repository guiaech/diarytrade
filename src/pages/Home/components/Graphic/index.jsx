import React from 'react';
import { Chart } from "react-google-charts";
import './style.css'

export const data = [
  ["Dia", "Meta", "Resultado"],
  ["Seg", 1000, 400],
  ["Ter", 1170, 460],
  ["Qua", 660, 1120],
  ["Qui", 1030, 540],
  ["Sex", 1030, 540],
];


const Graphic = () => {
  return (
    <>
      <div className="textPerfomance">
        <h1>|Perfomance</h1>
      </div>
      <div className='containerGrafico'>
        <Chart
          chartType="Bar"
          min-width="90%"
          height="400px"
          data={data}
        />
      </div>
    </>
  );
}

export default Graphic;