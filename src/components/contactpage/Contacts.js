import React from 'react';
import ContactItem from './ContactItem'

const Contacts = (props) => {


    let contactsArr = props.contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} onDelete={props.onDelete}/>
    })

    let displayItem = (id) => {

        let item = props.contacts.forEach(contact => {
            if(id === contact.id){ return <ContactItem contact={contact} onDelete={props.onDelete}/>}
        })

    }


    let names = props.contacts.map(contact => {
        return <p key={contact.id}>
                    {contact.name }<br/>
                    <button onClick={displayItem}>details</button>
                </p>
    })

    return (
        <>
            {names}
            {contactsArr}
        </>
    )

}

export default Contacts
