import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

  deleteContact = (id) => {
    const { contacts } = this.state;

    // cr8 new state without id(param id)
    const newContacts = contacts.filter(e => e.id !== id);

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