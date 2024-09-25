import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Context } from './store/appContext'; // Asegúrate de que la ruta sea correcta
import Home from './components/Home'; // Componente de ejemplo
import ContactList from './components/ContactList'; // Lista de contactos
import EditContact from './components/EditContact'; // Componente para editar contactos
import Modal from './components/Modal'; // Si usas un modal

const App = () => {
    return (
        <Context.Consumer>
            {({ actions }) => (
                <Router>
                    <div>
                        <h1>My Contact App</h1>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contacts" element={<ContactList />} />
                            <Route path="/edit/:id" element={<EditContact />} />
                        </Routes>
                    </div>
                    {/* Aquí puedes añadir tu modal si lo necesitas */}
                    {/* <Modal /> */}
                </Router>
            )}
        </Context.Consumer>
    );
};

export default App;
