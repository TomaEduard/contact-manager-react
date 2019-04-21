import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(e => e.id !== id);

    // copiam statul cu unul nou dar fara id'ul == cu id'ul pe care am dat click
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              {contacts.map(e => (
                <Contact
                  key={e.id}
                  contactt={e}
                  // prin bind(this, contact.id) luam idul a celui la care am dat click 
                  deleteClickHandler={this.deleteContact.bind(this, e.id)}

                />
              ))}

            </React.Fragment>
          )
        }}

      </Consumer>
    )
    const { contacts } = this.state;





  }
}

export default Contacts;