import React from 'react';

import { FormControl, InputLabel, FormHelperText, Select, MenuItem } from "@material-ui/core";

function FieldSelect({ field, ...props }) {
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
                <Select
                    id={props.id}
                    inputProps={{
                        ...field
                    }}
                >
                    {options && options.map((opt, index) =>
                        <MenuItem
                            key={index}
                            id={opt.id}
                            value={opt.value}
                        >{opt.label}
                        </MenuItem>)
                    }

                </Select>
                {props.helpText !== undefined ? (
                    <FormHelperText>
                        {props.helpText}
                    </FormHelperText>
                ) : null}
            </FormControl>
        </>
    )
};

export default FieldSelect; 
