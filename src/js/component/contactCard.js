import React from "react";

const ContactCard = ({imagen, fullName, address, phone, email}) => {
    return (
        <div className="container border-2 d-flex gap-3 justify-content-center">
            <div>{imagen}</div>
            <div>
                {fullName}
                {address}
                {phone}
                {email}
            </div>
            <div>editar</div>
            <div>borrar</div>
        </div>
    )
}

export default ContactCard;