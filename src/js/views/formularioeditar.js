import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const FormularioEditar = () => {
    const { actions, store } = useContext(Context);
    const { id } = useParams();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const agregar = async (e) => {
        e.preventDefault();

        const data = {
            name,
            phone,
            email,
            address
        };

        try {
            let resp = await actions.editContact(data, id);
            if (resp) {

                await actions.loadContacts();
                navigate("/");
            } else {
                console.error("Error al editar el contacto");
            }
        } catch (error) {
            console.error("Error en la operación:", error);
        }
    };

    const irAPaginaDeInicio = () => {
        navigate("/"); // Redirige a la página de inicio
    };

    return (
        <div className="container justify-content-center">
            <h1>Edit contact</h1>
            <form onSubmit={agregar}>
                <div className="input-group mb-3">
                    <span className="input-group-text">Full Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Add full name"
                        aria-label="Full Name"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Add email address"
                        aria-label="Email"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Phone</span>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        placeholder="Add phone number"
                        aria-label="Phone"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Address</span>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        placeholder="Add address"
                        aria-label="Address"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
                <button type="button" onClick={irAPaginaDeInicio} className="btn btn-secondary m-3">Regresar al inicio</button>
            </form>
        </div>
    );
};

export default FormularioEditar;
