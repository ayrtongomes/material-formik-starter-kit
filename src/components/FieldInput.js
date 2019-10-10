import React from 'react';

import { FormControl, InputLabel, FormHelperText, Input } from "@material-ui/core";

function FieldInput({ field, ...props }) {

    return (
        <>
            <FormControl fullWidth style={{ marginBottom: '20px' }}>
                {props.label !== undefined ? (
                    <InputLabel
                        htmlFor={props.id}
                    >
                        {props.label}
                    </InputLabel>
                ) : null}
                <Input
                    id={props.id}
                    {...field}
                />
                {props.helpText !== undefined ? (
                    <FormHelperText>
                        {props.helpText}
                    </FormHelperText>
                ) : null}
            </FormControl>
        </>
    );
};

export default FieldInput;
