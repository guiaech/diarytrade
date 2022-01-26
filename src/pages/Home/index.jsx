import React from 'react';
import Header  from '../../components/NavBar';
import Drop  from './components/Drop';
import Footer  from '../../components/Footer';

import '@aws-amplify/ui-react/styles.css'

import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports';
import awsExports from "../../aws-exports";

Amplify.configure(awsExports);

Auth.configure(awsconfig);


const Home = () => {
  return (
    <>
    <Header />
    <Drop />
    <Footer />
    </>
  );
}

export default withAuthenticator(Home)