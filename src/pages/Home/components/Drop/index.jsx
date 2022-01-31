import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Dash from '../Dash'



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
        <Accordion.Header>Dia 13/01/2021</Accordion.Header>
        <Accordion.Body>
          Dados do dia
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Dia 14/01/2021</Accordion.Header>
        <Accordion.Body>
          Dados do dia.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Dia 15/01/2021</Accordion.Header>
        <Accordion.Body>
          Dados do dia.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Dia 16/01/2021</Accordion.Header>
        <Accordion.Body>
          Dados do dia.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

export default Drop;