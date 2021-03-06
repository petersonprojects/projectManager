import React, { Component } from 'react';
import Contacts from './Contacts';
import AddContact from './AddContact';
import {Container} from 'react-bootstrap'
import './Contact.css';
import { v1 as uuidv1 } from 'uuid';

class ContactPage extends Component {

    constructor() {

        super();

        this.state = {
            contacts: [],
            itemsToExpand: []
        }

    }

    componentDidMount = () => {

        // typically this is where an api or database call goes
        // what we're doing here is initalizing some example projects to start

        this.setState({
            contacts: [
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

        oldContacts.sort((a, b) => {
            return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1: -1
        })

        this.setState({
            contacts: oldContacts
        })

    }

    handleDeleteContact = (id) => {

        let oldContacts = [...this.state.contacts];

        let index = oldContacts.findIndex(Obj => {
            return Obj.id === id;
        })

        console.log(index)

        oldContacts.splice(index,1);

        this.setState({
            contacts: oldContacts
        })
    }

    handleExpand = (id) => {

        let itemsToExpand = []
        let oldContacts = [...this.state.contacts];
        
        let index = oldContacts.findIndex(Obj => {
            return Obj.id === id;
        })

        itemsToExpand.push(oldContacts[index])
        console.log(itemsToExpand)

        this.setState({
            itemsToExpand: itemsToExpand
        })
        
    }

    render() {

        return (
            <>
                <Container>
                Add a contact<br/>
                <AddContact addContact={(newContact)=>this.handleAddContact(newContact)}/>
                <Contacts expanded={this.state.itemsToExpand} contacts={this.state.contacts} onExpand={(id)=>this.handleExpand(id)} onDelete={(id)=>this.handleDeleteContact(id)} />
                </Container>
            </>
        )
    }
}

export default ContactPage
