import React from 'react';
import { Box, TextField } from '@mui/material';
export default function CustomInput({ value, onChange, label, ...props }) {
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <TextField
                sx={{
                    width: '100%',
                    height: '100%'
                }}
                value={value}
                onChange={onChange}
                label={label}
                type={'text'}
                variant="outlined"
            />
        </Box>
    );
}
