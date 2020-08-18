import React from 'react';

const ContactItem = (props) => {


    return (
        <>
            <div>

            <li>

                <span>{props.contact.name} </span> |
                <span> {props.contact.city} </span> |
                <span> {props.contact.state} </span> |
                <button className="ml-2" onClick={()=>{props.onExpand(props.contact.id)}}> Expand</button>
                <button className="ml-2" onClick={()=>{props.onDelete(props.contact.id)}}> X</button>

            </li>

            </div>
        </>
    )
}

export default ContactItem
