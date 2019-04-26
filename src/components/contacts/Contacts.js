import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              <h1 className="display-6">
                <span className="text-danger">Contact List</span>
              </h1>

              {contacts.map(e => (
                <Contact
                  key={e.id}
                  contactt={e}
                />
              ))}

            </React.Fragment>
          );
        }}
      </Consumer>
    )
  }
}

export default Contacts;