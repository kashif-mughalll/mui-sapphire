import React from 'react';
import { forwardRef, useState } from 'react';
import MuiTextField from '@mui/material/TextField';

const TextField = forwardRef(({ characterLimit, ...props }, ref) => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <MuiTextField
            inputRef={ref}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: characterLimit }}
            helperText={characterLimit && `${props?.value?.length || value?.length} / ${characterLimit}`}
            onChange={props.onChange || handleChange}
            {...props}
        />
    );
});

export default TextField;