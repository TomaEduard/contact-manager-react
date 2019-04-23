import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';


class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  };

  // onNameChange = (e) => this.setState({ name: e.target.value });
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            < div className="card mb-3" >
              <div className="card-header">Add Contact</div>
              <div className="card-body">

                <form onSubmit={this.onSubmit.
                  bind(this, dispatch)}>

                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name . . . "
                      name="name"
                      value={name}
                      // onNameChange={this.onChange}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email . . . "
                      name="email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Phone Number . . . "
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-outline-primary btn-block btn-word"
                  />

                </form>
              </div>
            </div >

          )
        }}

      </Consumer>
    );

  }
}

export default AddContact;