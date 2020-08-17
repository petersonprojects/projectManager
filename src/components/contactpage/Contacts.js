import React from 'react';
import ContactItem from './ContactItem'

const Contacts = (props) => {

    let contactsArr = props.contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact}/>
    })

    return (
        <>
            {contactsArr}
        </>
    )

}

export default Contacts
