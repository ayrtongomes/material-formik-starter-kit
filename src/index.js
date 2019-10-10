import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

import { Formik } from 'formik';

import * as serviceWorker from './serviceWorker';


const App = () =>
    <>
        <Formik
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2))
            }}
        >
            <Form />
        </Formik>
    </>

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
