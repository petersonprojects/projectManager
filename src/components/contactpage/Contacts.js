import React from 'react';
import ContactItem from './ContactItem'
import ContactDetails from './ContactDetails'

const Contacts = (props) => {


    let contactsArr = props.contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} onExpand={props.onExpand} onDelete={props.onDelete}/>
    })

    let expanded = props.expanded.map(contact => {
        return <ContactDetails key={contact.id} contact={contact} onExpand={props.onExpand} onDelete={props.onDelete}/>
    })

    // let displayItem = (id) => {

    //     let item = props.contacts.forEach(contact => {
    //         if(id === contact.id){ return <ContactItem contact={contact} onDelete={props.onDelete}/>}
    //     })

    // }

    // let details = (id) => {

    //     let contactDetails = props.contacts.forEach(contact => {
    //         if(contact.id === id){return <ContactDetails key={contact.id} contact={contact} onDelete={props.onDelete}}/>
    //     })

    // }



    // let names = props.contacts.map(contact => {
    //     return <p key={contact.id}>
    //                 {contact.name }<br/>
    //                 <button onClick={props.onExpand}>details</button>
    //             </p>
    // })

    return (
        <>
            {contactsArr}
            {expanded}
        </>
    )

}

export default Contacts
