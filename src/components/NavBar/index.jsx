import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './style.css'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);


function Header({ signOut, user }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/home'>Trade diary AFT</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <span className='welcome'>Bem vindo {user.username}</span>
            <button className='signOut' onClick={signOut}>Sair</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
}

export default withAuthenticator(Header);