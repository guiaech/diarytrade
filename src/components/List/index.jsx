import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Amplify, { API } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import awsExports from "../../aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';
import Accordion from 'react-bootstrap/Accordion';


Amplify.configure(awsExports);

function List({ user }) {
    const [todos, setTodos] = useState([])

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
        } catch (err) { console.log('error fetching todos') }
    }

    return (
        <Accordion defaultActiveKey="1">
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