import React, {useContext, useState} from "react";
import {Context} from "../store/appContext"
import { useNavigate } from "react-router";

const FormularioNuevoContacto = () => {
    const {actions, store} = useContext(Context)
    //useState // estado para data set data todos los valores del formulario
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const navigate= useNavigate()

    const agregar = async (e ) => {
        e.preventDefault()

      
        const data = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
          }
       let resp = await actions.postContacts(data)
       if(resp){
        navigate("/")
       } else{
        alert("algo salio mal")
       }
    }

    return (
        <div className="container justify-content-center">
            <h1>Add a new contact</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Full Name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Add full name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Add email address" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Add phone number" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Add address" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <button className="btn btn-primary d-flex text-align-center" onClick={agregar}>Save</button>
            </div>
        

    )

}

export default FormularioNuevoContacto;