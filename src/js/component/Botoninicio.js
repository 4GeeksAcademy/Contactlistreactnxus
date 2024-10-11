import React from "react";
import { useNavigate } from "react-router-dom";

const BotonInicio = () => {
    const navigate = useNavigate();

    const irAPaginaDeInicio = () => {
        navigate("/");
    };

    return (
        <button onClick={irAPaginaDeInicio} className="btn btn-primary">
            Ir a la Página de Inicio
        </button>
    );
};

export default BotonInicio;
