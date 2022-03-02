import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Amplify, { API } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import awsExports from "../../aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';
import Accordion from 'react-bootstrap/Accordion';
import { Chart } from "react-google-charts";
import './style.css'

Amplify.configure(awsExports);

function List({ user }) {
    const [todos, setTodos] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        fetchTodos()
    })

    let filter = {
        username: {
            eq: user.username
        }
    };

    async function fetchTodos() {
        try {
            const todoData = await API.graphql({ query: listTodos, variables: { filter: filter } })
            const todos = todoData.data.listTodos.items
            setTodos(todos)
            const data = [
                ["Dia", "Meta", "Resultado"],
                [todos[0].data, todos[0].meta, todos[0].resultado],
                [todos[1].data, todos[1].meta, todos[1].resultado],
                [todos[2].data, todos[2].meta, todos[2].resultado],
                [todos[3].data, todos[3].meta, todos[3].resultado],
                [todos[4].data, todos[4].meta, todos[4].resultado]
            ];
            setData(data)
        } catch (err) { console.log('error fetching todos') }
    }

    return (
        <Accordion defaultActiveKey="1">
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
            <Accordion.Item eventKey="0">
                <Accordion.Header>Banco de Dados</Accordion.Header>
                <Accordion.Body>
                    <div className='lista'>
                        {
                            todos.map((todo, index) => (
                                <Table striped bordered hover variant="dark" responsive>
                                    <thead key={todo.id ? todo.id : index} >
                                        <tr>
                                            <th>Data</th>
                                            <th>Delta</th>
                                            <th>Meta</th>
                                            <th>Meta Loss</th>
                                            <th>Observação</th>
                                            <th>Capital</th>
                                            <th>Operação</th>
                                            <th>Resultado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td >{todo.data}</td>
                                            <td>{todo.delta}</td>
                                            <td>{todo.meta}</td>
                                            <td>{todo.metaloss}</td>
                                            <td>{todo.pobservacao}</td>
                                            <td>{todo.capital}</td>
                                            <td>{todo.poperacao}</td>
                                            <td>{todo.resultado}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            ))
                        }
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default withAuthenticator(List);