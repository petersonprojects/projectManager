import React, { Component } from 'react';
import Contacts from './Contacts';
import AddContact from './AddContact';
import { v1 as uuidv1 } from 'uuid';

class ContactPage extends Component {

    constructor() {

        super();

        this.state = {
            contacts: []
        }

    }

    componentDidMount = () => {

        // typically this is where an api or database call goes
        // what we're doing here is initalizing some example projects to start

        this.setState({
            contacts: [
                {
                    name: "Micah",
                    email: "micahpeterson@live.com",
                    phone: 5125684217,
                    address: "3323 McCue Rd.",
                    city: "Houston",
                    state: "TX",
                    zip: 77056,
                    id: uuidv1()
                },
                {
                    name: "Alyson Lauron",
                    email: "alysonlauron@live.com",
                    phone: 5126642217,
                    address: "3323 McCue Rd.",
                    city: "Houston",
                    state: "TX",
                    zip: 77056,
                    id: uuidv1()
                },
                {
                    name: "Taylor",
                    email: "thickson@live.com",
                    phone: 2817536607,
                    address: "1317 Babcock Ln.",
                    city: "Katy",
                    state: "TX",
                    zip: 77543,
                    id: uuidv1()
                }
            ]
        })
    }

    handleAddContact = (newContact) => {
        
        let oldContacts = [...this.state.contacts];

        oldContacts.push(newContact);

        this.setState({
            contacts: oldContacts
        })

    }

    render() {

        return (
            <>
                Add a contact<br/>
                <AddContact addProject={(newContact)=>this.handleAddContact(newContact)}/>
                <Contacts contacts={this.state.contacts} />
            </>
        )
    }
}

export default ContactPage
