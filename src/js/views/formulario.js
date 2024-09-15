import React from "react";

const FormularioNuevoContacto = () => {

    return (
        <div className="container justify-content-center">
            <h1>Add a new contact</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Full Name</span>
                <input type="text" className="form-control" placeholder="Add full name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" className="form-control" placeholder="Add email address" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="text" className="form-control" placeholder="Add phone number" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" className="form-control" placeholder="Add address" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <button className="btn btn-primary d-flex text-align-center">Save</button>
            </div>
        

    )

}

export default FormularioNuevoContacto;