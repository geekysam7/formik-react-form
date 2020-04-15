import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';

//Creating a custom validation funciton so we do not limit our
//code to just browsers.

// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     }else if (values.firstName.length > 15 ) {
//         errors.firstName = 'Must be 15 characters or less';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (values.lastName.length > 20 ) {
//         errors.lastName = 'Must be 20 characters or less';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;
// };

//Implemented the above custom validation using yup.

const SignupForm = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //     },
    //     validationSchema: Yup.object({
    //         firstName: Yup.string()
    //         .max(15, 'Must be 15 characters or less')
    //         .required('Required'),
    //         lastname: Yup.string()
    //         .max(20, 'Must be 20 characters or less')
    //         .required('Required'),
    //         email: Yup.string()
    //         .email('Invalid email address')
    //         .required('Required'),
    //     }),
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // });

    return (
        <Formik
        initialValues = {{
            firstName: '',
            lastName: '',
            email: '',
        }}
        validationSchema = { Yup.object({
            firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
        >
        <div className="at-form-back">
            <Form className="center-form">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <Field className="input-area" name="firstName" type="text" />
                <ErrorMessage component="div" className="error-message" name="firstName" />
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <Field className="input-area" name="lastName" type="text" />
                <ErrorMessage component="div" className="error-message" name="lastName" />
                <label className="form-label" htmlFor="email">Email</label>
                <Field className="input-area" name="email" type="email" />
                <ErrorMessage component="div" className="error-message" name="email" />
                <button className="btn" type="submit">Submit</button>
            </Form>
        </div>
        </Formik>
    );
};

ReactDOM.render(
    <SignupForm/>,
    document.getElementById('root')
)