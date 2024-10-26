import React from 'react';
import Text from '../Components/Inputs/Text';
import BasicButton from '../Components/Inputs/Button';
import { Controller, useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Name:', data.name);
    console.log('Email:', data.email);
  };

  return (
    <div>
      <h1>Pagina inicial</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="hidden" name="form-name" value="contact" /> */}
        <Controller
          control={control}
          render={({ field }) => {
            return <Text
              label="Nome"
              value={field.value}
              onChange={field.onChange}
              error={errors.name?.message}
            />;
           }}
          name={'name'}
        />
        <div>
          <label>
            Email:
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
            />
          </label>
          {/* {errors.email && <p>{errors.email.message}</p>} */}
        </div>
        <BasicButton type="submit" label='Enviar' />
      </form>
    </div>
  );
};

export default Contact;