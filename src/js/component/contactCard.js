import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import Modal from "./Modal";

// Example SVGs for edit and delete icons
const editIcon = (
    <svg width="22" height="22" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.854a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708L6.707 11.646a.5.5 0 0 1-.146.105L1 13l1.146-5.646a.5.5 0 0 1 .105-.146L12.146.854z"/>
    </svg>
);

const deleteIcon = (
    <svg width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        <path d="M6.5 0a.5.5 0 0 1 .5.5V1h3V.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V1h1a.5.5 0 0 1 .5.5V2H0v-.5A.5.5 0 0 1 .5 1h1V.5a.5.5 0 0 1 .5-.5h3zM1 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2H1zm2 2h10v10H3V4z"/>
    </svg>
);

// Icons for address, phone, and email
const locationIcon = (
    <svg width="22" height="22" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M8 0a4 4 0 0 0-4 4c0 2.037 2.48 5.077 3.638 6.556.192.228.384.395.537.514.153-.12.345-.287.537-.514C9.52 9.077 12 6.037 12 4a4 4 0 0 0-4-4zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
);

const phoneIcon = (
    <svg width="22" height="22" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M1.885 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5A.5.5 0 0 1 0 1.5v-1A.5.5 0 0 1 .5 0h1.385zm0 2H.5A1.5 1.5 0 0 0 0 3.5v1a1.5 1.5 0 0 0 1.5 1.5h1.77a7.489 7.489 0 0 1 4.43 1.5 7.49 7.49 0 0 1 4.43-1.5h1.77A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-1.77a7.489 7.489 0 0 1-4.43 1.5A7.49 7.49 0 0 1 6.27 2h-1.77A1.5 1.5 0 0 0 1.885 2zm0 3h1.769a5.989 5.989 0 0 1 4.43 1.5 5.99 5.99 0 0 1 4.43-1.5h1.769a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.77a6.99 6.99 0 0 0-4.43 1.5 6.99 6.99 0 0 0-4.43-1.5H2.385a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
    </svg>
);

const emailIcon = (
    <svg width="22" height="22" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0v.945L8 8.636 14 4.945V4H2zm0 1.097L8 9.307 14 5.097V12H2V6.097z"/>
    </svg>
);

const ContactCard = ({ id, fullName, address, phone, email, imageUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = async () => {
        await actions.deleteContact(id);
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ position: 'relative', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', marginBottom: '10px' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleEdit}>
                    {editIcon}
                </button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleDelete}>
                    {deleteIcon}
                </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={imageUrl || "https://tse3.mm.bing.net/th?id=OIP.RVZE3BuFMbQc1HtbZICFuAHaKa&pid=Api&P=0&h=180"} alt={fullName} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                <div style={{ marginLeft: '10px' }}>
                    <p>{fullName}</p>
                    <p style={{ display: 'flex', alignItems: 'center' }}>
                        {locationIcon}
                        <span style={{ marginLeft: '5px' }}>{address}</span>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center' }}>
                        {phoneIcon}
                        <span style={{ marginLeft: '5px' }}>{phone}</span>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center' }}>
                        {emailIcon}
                        <span style={{ marginLeft: '5px' }}>{email}</span>
                    </p>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDelete} />
        </div>
    );
};

export default ContactCard;
