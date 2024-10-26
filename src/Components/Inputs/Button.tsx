import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface IParams {
  label: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "contained" | "outlined" | "text" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function BasicButton(params: IParams) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant={params.variant || "contained"}
        disabled={params.disabled}
        onClick={params.onClick}
        type={params.type || 'submit'}
      >
        {params.label}
      </Button>
    </Stack>
  );
}