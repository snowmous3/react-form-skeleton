import React from 'react';
import Text from '../../Components/Inputs/Text';
import BasicButton from '../../Components/Inputs/Button';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const BaseSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').regex(/^[a-z A-Z]+$/, 'Nome deve conter apenas letras'),
  age: z.string(),
  email: z.string().email('Email inválido')
});

export type BaseType = z.infer<typeof BaseSchema>

const ZodForm = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log('User:', user);

  const { handleSubmit, control, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(BaseSchema)
  });

  const onSubmit = (data: BaseType) => {
    console.log('Schema:', data);
  };

  return (
    <div>
      <h1>Zod Form:</h1>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
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
        <Controller
          control={control}
          render={({ field }) => {
            return <Text
              label="Email"
              value={field.value}
              onChange={field.onChange}
              error={errors.email?.message}
            />;
           }}
          name={'email'}
        />
        <Controller
          control={control}
          render={({ field }) => {
            return <Text
              label="Idade"
              value={field.value}
              onChange={field.onChange}
              error={errors.age?.message}
            />;
           }}
          name={'age'}
        />
        <BasicButton type="submit" disabled={!isValid} label='Enviar' />
      </form>
    </div>
  );
};

export default ZodForm;