import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

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