import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({ onclick, label, ...props }) {
    return (
        <Button {...props} onClick={onclick} variant="outlined">
            {label}
        </Button>
    );
}
