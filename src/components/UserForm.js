import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import CredentialForm from "./CredentialForm"
import UserDetailForm from "./UserDetailForm"
import Confirm from "./Confirm"
import Success from "./Success"
const UserForm = () => {
    const [step, setStep] = useState(1)
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        ocupation: "",
        age: "",
        address: "",

    }
    const onSubmit = values => {
        console.log("form data", values)
    }
    // console.log(Yup.object())
    const validationSchema = Yup.object({
        email: Yup.string().min(3).max(100)
            .email("Invalid emaill formate")
            .required("Email is Required"),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        firstName: Yup.string().min(3).max(100).required("First Name is Required"),
        lastName: Yup.string().min(3).max(100).required("Last Name is Required"),
        ocupation: Yup.string().min(3).max(100).required("Ocupation is Required"),
        age: Yup.number().min(18).max(150).required("Age is Required"),
        address: Yup.string().min(18).max(150).required("Address is Required"),
    })
    const next = () => {
        // console.log("clicked")
        setStep(step + 1)
    }
    const previous = () => {
        setStep(step - 1)
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {formik => {
                switch (step) {
                    case 1:
                        return (
                            <CredentialForm
                                formik={formik}
                                Form={Form}
                                Field={Field}
                                ErrorMessage={ErrorMessage}
                                next={next}
                            />
                        );
                    case 2:
                        return (
                            <UserDetailForm
                                formik={formik}
                                Form={Form}
                                Field={Field}
                                ErrorMessage={ErrorMessage}
                                next={next}
                                previous={previous}
                            />
                        );
                    case 3:
                        return (
                            <Confirm
                                formik={formik}
                                next={next}
                                previous={previous}
                            />
                        );
                    case 4:
                        return (
                            <Success
                                formik={formik}
                            />
                        )
                    default:
                        console.log("this is a muiltistep form")
                }
            }}

        </Formik>
    )
}

export default UserForm
