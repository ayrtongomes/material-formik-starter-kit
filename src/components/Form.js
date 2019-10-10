import React from 'react';

import { Form, Field } from 'formik';
import FieldInput from './FieldInput';
import Button from '@material-ui/core/Button';

const SampleForm = ({ ...props }) => {
    return (
        <Form>
            <Field name='name'>
                {({ field }) => (
                    <FieldInput field={field} label="Name *" />
                )}
            </Field>
            <Field name='surename'>
                {({ field }) => (
                    <FieldInput field={field} label="Surename *" />
                )}
            </Field>
            <Button variant="contained" size="small" type="submit" fullWidth>
                Save
            </Button>
        </Form>
    );
};

export default SampleForm;
