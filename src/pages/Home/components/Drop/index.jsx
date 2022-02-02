import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Dash from '../Dash';
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


const Drop = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Preencher</Accordion.Header>
        <Accordion.Body>
          <Dash />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Perfomance</Accordion.Header>
        <Accordion.Body>

          <div className='containerGrafico'>
          <Chart
            chartType="Bar"
            width="90%"
            height="500px"
            data={data}
          />
          </div>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

export default Drop;