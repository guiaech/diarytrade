import React, { useEffect, useState } from 'react'
import Amplify, { API } from 'aws-amplify'
import { listTodos } from '../../../../graphql/queries'
import awsExports from "../../../../aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

function List({user}) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, )

    let filter = {
        username: {
            eq: user.username 
        }
    };

    async function fetchTodos() {
        try {
            const todoData = await API.graphql({ query: listTodos, variables: { filter: filter}})
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
                        <td>capital: {todo.capital}</td>
                    </tr>
                ))
            }
        </div>

    )
}

export default withAuthenticator(List);