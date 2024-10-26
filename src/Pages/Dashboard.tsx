import React, { useState } from 'react';
import Text from '../Components/Inputs/Text';
import BasicButton from '../Components/Inputs/Button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    navigate('/details', { state: { name: name, email: email } });
  };

  return (
    <div>
      <h1>Pagina inicial</h1>
      <form onSubmit={handleSubmit}>
        <Text label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <Text label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <BasicButton label="Enviar" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Dashboard;