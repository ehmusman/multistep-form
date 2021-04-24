import React from 'react'

const Success = ({ formik }) => {
    console.log(formik)
    return (
        <div className="container h3">
            Form is Submitted Successfully
        </div>
    )
}

export default Success
