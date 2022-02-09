import React from 'react';
import Header from '../../components/NavBar';
import { FeaturesText2x2 } from '../../ui-components';
import List from '../../components/List';
import Graphic from '../../components/Graphic';
import Footer from '../../components/Footer';
import '@aws-amplify/ui-react/styles.css'
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports';
import awsExports from "../../aws-exports";
import Dash from '../../components/Dash';

Amplify.configure(awsExports);

Auth.configure(awsconfig);

const Home = () => {
  return (
    <>
      <Header />
      <FeaturesText2x2 />
      <Dash />
      <Graphic />
      <List />     
      <Footer />
    </>
  );
}

export default withAuthenticator(Home)