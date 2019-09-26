import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from 'Form.js';

import { Formik } from 'formik';

import * as serviceWorker from './serviceWorker';


const App = () =>
    <>
        <Formik>
            <Form />
        </Formik>
    </>

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
