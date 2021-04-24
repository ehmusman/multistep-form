import React from 'react'

const UserDetailForm = ({
    formik,
    Form,
    Field,
    ErrorMessage,
    next,
    previous
}) => {
    const { errors, touched, values } = formik
    let { firstName: firstNameE, lastName: lastNameE, ocupation: ocupationE, age: ageE, address: addressE } = errors
    let { firstName: firstNameT, lastName: lastNameT, ocupation: ocupationT, age: ageT, address: addressT } = touched

    const { firstName, lastName, ocupation, age, address } = values

    const handleNextClick = (e) => {
        e.preventDefault()
        if (firstName && lastName && ocupation && age && address && !firstNameE && !lastNameE && !ocupationE && !ageE && !addressE) {
            next()
        }
    }
    const handleBackClick = () => {
        previous()
    }
    return (
        <Form>
            <div className="form-group">
                <label htmlFor="firstName">FirstName</label>
                <Field
                    className={`form-control ${firstNameT && firstNameE ? "is-invalid" : ""}`}
                    type="text"
                    name="firstName"
                    id="firstName"
                />
                <ErrorMessage name="firstName" >
                    {msg => <div className="invalid-feedback">{msg}</div>}
                </ErrorMessage>
            </div>

            <div className="form-group">
                <label htmlFor="lastName">LastName</label>
                <Field
                    className={`form-control ${lastNameT && lastNameE ? "is-invalid" : ""}`}
                    type="lastName"
                    name="lastName"
                    id="lastName"
                />
                <ErrorMessage name="lastName" >
                    {msg => <div className="invalid-feedback">{msg}</div>}
                </ErrorMessage>
            </div>

            <div className="form-group">
                <label htmlFor="ocupation">Ocupation</label>
                <Field
                    className={`form-control ${ocupationT && ocupationE ? "is-invalid" : ""}`}
                    type="ocupation"
                    name="ocupation"
                    id="ocupation"
                />
                <ErrorMessage name="ocupation" >
                    {msg => <div className="invalid-feedback">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <Field
                    className={`form-control ${addressT && addressE ? "is-invalid" : ""}`}
                    type="text"
                    name="address"
                    id="address"
                />
                <ErrorMessage name="address" >
                    {msg => <div className="invalid-feedback">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <Field
                    className={`form-control ${ageT && ageE ? "is-invalid" : ""}`}
                    type="number"
                    name="age"
                    id="age"
                />
                <ErrorMessage name="age" >
                    {msg => <div className="invalid-feedback">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                <button type="button" onClick={handleNextClick} className="btn btn-primary btn-block col-3 offset-2 ">
                    Continue
                    </button>
                <button type="button" onClick={handleBackClick} className="btn btn-light col-3 offset-2">
                    Back
                </button>
            </div>
        </Form>
    )
}

export default UserDetailForm
