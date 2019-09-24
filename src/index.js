import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from 'Form.js';

import * as serviceWorker from './serviceWorker';


const App = () =>
    <>
        <Form />
    </>

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
