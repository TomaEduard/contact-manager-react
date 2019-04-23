import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {

  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          e => e.id !== action.payload)
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }

}

export class Provider extends Component {
  state = {
    contacts: [

      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '222-222-222'
      },
      {
        id: 3,
        name: 'Henry Jhonson',
        email: 'henry@gmail.com',
        phone: '111-222-444'
      }

    ],

    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  // Share state to anybody want to use objects or action
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

// If we use "Export Context.Consumer;" when we want to use the state we'll have to write Context.Consumer
export const Consumer = Context.Consumer;