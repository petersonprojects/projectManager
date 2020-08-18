import React from 'react'

const ContactDetails = (props) => {
    return (
    <>
        <div>
            <span> {props.contact.phone} </span> |
            <span> {props.contact.email} </span> |
            <span> {props.contact.address} </span> |
            <span> {props.contact.zip} </span>
        </div>
    </>
    )
}

export default ContactDetails
