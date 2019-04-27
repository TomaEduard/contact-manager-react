import React, { Component } from 'react';
import axios from 'axios';

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
    contacts: [],

    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  // load state with axios req
  async componentDidMount() {
    const res = await axios
      .get('http://jsonplaceholder.typicode.com/users')

    this.setState({ contacts: res.data })
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