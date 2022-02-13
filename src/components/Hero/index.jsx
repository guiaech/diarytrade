import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="heroHome">
      <h1 className='titleHero'>Bem vindo ao seu diário de perfomance Day Trading</h1>
      <h5 className='textHero'>Aqui você consegue ter controle de seus dados e controle de seu resultado de performance</h5>
      <Button variant="outline-secondary"><Link to='/Login' className='loginHero'>Login</Link></Button>
    </div>
  );
}
