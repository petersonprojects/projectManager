import React, { Component } from 'react';
import {Form, Col} from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';


class AddContact extends Component {
  

    handleSubmit = (e) => {

        e.preventDefault();

        let contact = {
            id: uuidv1(),
            name: this.refs.name.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
            address: this.refs.address.value,
            city: this.refs.city.value,
            state: this.refs.state.value,
            zip: this.refs.zip.value

        }
        
        this.props.addContact(contact);
    }


    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="formBasicEmail">
                        <Col>
                            <input className="ml-1" ref="name" type="text" placeholder="name"/>
                            <input className="ml-1" ref="phone" type="text" placeholder="phone"/>
                            <input className="ml-1" ref="email" type="text" placeholder="email"/>
                            <input className="ml-1" ref="address" type="text" placeholder="address"/>
                            <input className="ml-1" ref="city" type="text" placeholder="city"/>
                            <input className="ml-1" ref="state" type="text" placeholder="state"/>
                            <input className="ml-1" ref="zip" type="text" placeholder="zip"/>
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        
                    </Form.Group>

                    <input type="submit" className="buttonStyle" value="submit"/>

                </Form>
            </>
        )
    }
}

export default AddContact
