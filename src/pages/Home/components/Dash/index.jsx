import { withAuthenticator } from '@aws-amplify/ui-react';
import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './styles.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../../../../graphql/mutations';
import awsExports from "../../../../aws-exports";
Amplify.configure(awsExports);


const initialState = {
    username: '',
    data: '',
    capital: '',
    delta: '',
    meta: '',
    metaloss: '',
    pobservacao: '',
    poperacao: '',
    resultado: '',
}

function Dash({ user }) {
    let username = user.username
    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addTodo() {
        try {
            formState.username = username
            if (!formState.username) return
            const todo = { ...formState }
            setTodos([...todos, todo])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createTodo, { input: todo }))
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    return (

        <>
            <h1>|Diary</h1>
            <CardGroup id='area'>
                <Card>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Data</InputGroup.Text>
                        <FormControl
                            id='data'
                            name='data'
                            type='date'
                            value={formState.data} onChange={event => setInput('data', event.target.value)}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Meta</InputGroup.Text>
                        <FormControl
                            id='meta'
                            name='meta'
                            value={formState.meta} onChange={event => setInput('meta', event.target.value)}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Meta Loss</InputGroup.Text>
                        <FormControl
                            id='metaloss'
                            name='metaloss'
                            value={formState.metaloss} onChange={event => setInput('metaloss', event.target.value)}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Capital</InputGroup.Text>
                        <FormControl
                            id='capital'
                            name='capital'
                            value={formState.capital} onChange={event => setInput('capital', event.target.value)}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default"> Delta </InputGroup.Text>
                        <FormControl
                            id='delta'
                            name='delta'
                            value={formState.delta} onChange={event => setInput('delta', event.target.value)}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Resultado</InputGroup.Text>
                        <FormControl
                            id='resultado'
                            name='resultado'
                            value={formState.resultado} onChange={event => setInput('resultado', event.target.value)}
                        />
                    </InputGroup>
                    <br />
                </Card>
                <Card>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className='areatextpos'>Pontos de Observação</InputGroup.Text>
                        <textarea id='pobservacao' name='pobservacao' value={formState.pobservacao} onChange={event => setInput('pobservacao', event.target.value)} label="Pontos negativos"></textarea>
                    </InputGroup>
                    <br />

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className='areatextneg'>Pontos de Operação</InputGroup.Text>
                        <textarea id='poperacao' name='poperacao' value={formState.poperacao} onChange={event => setInput('poperacao', event.target.value)} label="Pontos negativos"></textarea>
                    </InputGroup>
                </Card>
                <div className="divSubmit">
                    <button value="enviar" className="buttonForm" onClick={addTodo}>
                        SEND
                    </button>
                </div>
            </CardGroup>
        </>
    )
}


export default withAuthenticator(Dash);