import React from 'react';
import Text from '../Components/Inputs/Text';
import BasicButton from '../Components/Inputs/Button';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  const onSubmit = (data: any) => {
    console.log('Schema:', data);
  };

  return (
    <div>
      <h1>Details:</h1>
      <form onSubmit={onSubmit}>
        <Text label="Nome" value={name} />
        <Text label="Email" value={email}  />
        <br />
        <BasicButton label="Enviar" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default Details;