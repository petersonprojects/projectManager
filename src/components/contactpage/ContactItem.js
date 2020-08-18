import React from 'react';

const ContactItem = (props) => {


    return (
        <>
            <div>

            <li>

                <span>{props.contact.name} </span> |
                
                <span> {props.contact.phone} </span> |
                <span> {props.contact.email} </span> |
                <span> {props.contact.address} </span> |
                <span> {props.contact.city} </span> |
                <span> {props.contact.state} </span> |
                <span> {props.contact.zip} </span>

                <button onClick={()=>{props.onDelete(props.contact.id)}}> X</button>

            </li>

            </div>
        </>
    )
}

export default ContactItem
