import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../../../../graphql/queries'
import awsExports from "../../../../aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

function List() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    return (

        <div className='lista'>
            {
                todos.map((todo, index) => (
                    <tr key={todo.id ? todo.id : index} >
                        <td >data: {todo.data}</td>
                        <td>delta: {todo.delta}</td>
                        <td>meta: {todo.meta}</td>
                        <td>metaloss: {todo.metaloss}</td>
                        <td>observação: {todo.pobservacao}</td>
                        <td>operação: {todo.poperacao}</td>
                        <td>resultado: {todo.resultado}</td>
                        <td >username: {todo.username}</td>
                        <td>capital: {todo.capital}</td>
                    </tr>
                ))
            }
        </div>

    )
}

export default withAuthenticator(List);