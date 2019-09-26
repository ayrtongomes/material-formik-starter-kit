import React from 'react';

// import { Container } from './styles';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";

function FieldInpu({ ...props }) {

    return (
        <>
            <FormControl>
                {props.label !== undefined ? (
                    <InputLabel
                        htmlFor={props.id}
                    >
                        {props.label}
                    </InputLabel>
                ) : null}
                <Input
                    id={props.id}
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
