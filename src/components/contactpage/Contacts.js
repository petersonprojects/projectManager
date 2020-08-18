import React from 'react';
import ContactItem from './ContactItem'

const Contacts = (props) => {

    // let namesList = [];

    let contactsArr = props.contacts.map(contact => {
        // namesList.push(contact.name)
        // namesList.sort();
        return <ContactItem key={contact.id} contact={contact}/>
    })

    return (
        <>
            {contactsArr}
        </>
    )

}

export default Contacts
