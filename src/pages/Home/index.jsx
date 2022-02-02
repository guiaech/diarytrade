import React from 'react';
import Header from '../../components/NavBar';
import Drop from './components/Drop';
import Footer from '../../components/Footer';
import './style.css'
import '@aws-amplify/ui-react/styles.css'
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports';
import awsExports from "../../aws-exports";
import Dash from './components/Dash';

Amplify.configure(awsExports);

Auth.configure(awsconfig);


const Home = () => {
  return (
    <>
      <Header />
      <Dash />
      <Drop />
      <Footer />
    </>
  );
}

export default withAuthenticator(Home)