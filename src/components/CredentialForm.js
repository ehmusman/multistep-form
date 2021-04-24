import React from 'react'

const CredentialForm =
    ({
        formik,
        Form,
        Field,
        ErrorMessage,
        next
    }) => {
        const { errors, touched, values } = formik
        const { email: emailE, password: passwordE, confirmPassword: confirmPasswordE } = errors
        const { email: emailT, password: passwordT, confirmPassword: confirmPasswordT } = touched
        const { email, password, confirmPassword } = values
        const handleOnClick = (e) => {
            e.preventDefault()
            if (email && password && confirmPassword && !emailE && !passwordE && !confirmPasswordE) {
                next()
            }
        }
        return (
            <Form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                        className={`form-control ${emailT && emailE ? "is-invalid" : ""}`}
                        type="text"
                        name="email"
                        id="email"
                    />
                    <ErrorMessage name="email" >
                        {msg => <div className="invalid-feedback">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                        className={`form-control ${passwordT && passwordE ? "is-invalid" : ""}`}
                        type="password"
                        name="password"
                        id="password"
                    />
                    <ErrorMessage name="password" >
                        {msg => <div className="invalid-feedback">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                        className={`form-control ${confirmPasswordT && confirmPasswordE ? "is-invalid" : ""}`}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                    <ErrorMessage name="confirmPassword" >
                        {msg => <div className="invalid-feedback">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="row">
                    <button type="button" onClick={handleOnClick} className="btn btn-primary btn-block col-6 offset-3 ">
                        Continue
                    </button>
                </div>
            </Form>
        )
    }

export default CredentialForm
