// src/App.jsx
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
    return (
        <div>
            <h1>Controlled Components</h1>
            <RegistrationForm />
            
            <h1>Formik Components</h1>
            <FormikForm />
        </div>
    );
}

export default App;
