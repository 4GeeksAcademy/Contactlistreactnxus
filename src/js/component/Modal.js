import React from "react";
import styled from "styled-components";

// Styled components for the modal
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    text-align: center;
`;

const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;

    &:hover {
        opacity: 0.8;
    }
`;

const CancelButton = styled(Button)`
    background-color: #ddd;
`;

const ConfirmButton = styled(Button)`
    background-color: #d9534f;
    color: white;
`;

const Modal = ({ isOpen, onClose, onConfirm, id }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <h3>Are you sure?</h3>
                <p>This will delete the entire universe.</p>
                <ConfirmButton onClick={onConfirm}>Yes, delete</ConfirmButton>
                <CancelButton onClick={onClose}>Please don't delete</CancelButton>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
