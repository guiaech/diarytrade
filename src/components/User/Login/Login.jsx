import React, {Component} from 'react';
import {Authenticator} from 'aws-amplify-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';
import './Login.css'

export default class Login extends Component {
  componentDidMount() {
    Amplify.configure({
      mandatorySigIn: true,
      region: 'us-west-2',
      userPoolId: 'us-west-2_cXIvEtH37',
      identityPoolId: 'us-west-2:4645f9a0-e970-4b5a-a3dc-9db3689ce1f5',
      userPollWebClientId: '2jdbe92d8f99sqtiqi3jt9di7u'
    })
  }

  render(){
    return(
      <div><Authenticator/></div>
    )
  }



}