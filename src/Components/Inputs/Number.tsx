import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FieldError } from 'react-hook-form';

interface IParams {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "standard" | "outlined" | "filled" | undefined;
  required?: boolean;
  disabled?: boolean;
  error?: any;
}

export default function Text(params: IParams) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required={params.required}
        id="outlined-basic"
        type='number'
        label={params.label}
        variant={params.variant ? params.variant : "outlined"}
        value={params.value}
        onChange={params.onChange}
        error={!!params.error}
        helperText={params.error ? params.error.toString() : ''}
      />
    </Box>
  );
}