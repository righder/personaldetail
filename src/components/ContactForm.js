import React, { useState, useEffect } from "react";
import './ContactForm.css'

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <>
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <span><i className="fas fa-user"></i></span>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Full Name" name="fullName"
                        value={values.fullName} onChange={handleInputChange} />
                </div>
                <br />
                <div className="f">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <span><i className="fas fa-mobile-alt"></i></span>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Mobile" name="mobile"
                            value={values.mobile} onChange={handleInputChange} />
                    </div>
                    <br />
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <span><i className="fas fa-envelope"></i></span>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Email" name="email"
                            value={values.email} onChange={handleInputChange} />
                    </div>
                    <br />
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Address" name="address"
                            value={values.address} onChange={handleInputChange} />
                    </div>
                    <br />

                </div>
                <div className=" sp">
                    <input type="submit" value={props.currentId == '' ? "save" : "update"} className="btn btn-primary btn-block" />
                </div>
            </form>

        </>
    );
}

export default ContactForm;