import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import classnames from 'classnames';
import PropTypes from 'prop-types';


class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errorsName: '',
    errorsEmail: '',
    errorsPhone: ''

  };

  // cr8 object with user input values
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    // Check for errors
    if (name === '') {
      this.setState({ errorsName: 'Name is required' })
      return;
    }
    if (email === '') {
      this.setState({ errorsEmail: 'Email is required' })
      return;
    }
    if (phone === '') {
      this.setState({ errorsPhone: 'Phone is required' })
      return;
    }

    // Call dispatch function with ADD_CONTACT type
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // redirect to root page
    this.props.history.push('/');
  };

  // onNameChange = (e) => this.setState({ name: e.target.value });
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (e.target.value.length === 0) {
      if (e.target.name === 'name') {
        this.setState({ errorsName: 'Name is required' })
      } else if (e.target.name === 'email') {
        this.setState({ errorsEmail: 'Email is required' })
      } else if (e.target.name === 'phone') {
        this.setState({ errorsPhone: 'Phone is required' })
      }

    } else {
      if (e.target.name === 'name') {
        this.setState({ errorsName: '' })
      } else if (e.target.name === 'email') {
        this.setState({ errorsEmail: '' })
      } else if (e.target.name === 'phone') {
        this.setState({ errorsPhone: '' })
      }
    }

  }

  render() {
    const { name, email, phone, errorsName, errorsEmail, errorsPhone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <React.Fragment>

              <h1 className="display-6 mb-2">
                <span className="text-danger">Add Contact</span>
              </h1>

              < div className="card mb-3" >
                <div className="card-header">Add Contact</div>
                <div className="card-body">



                  <form onSubmit={this.onSubmit.
                    bind(this, dispatch)}>

                    <div className="form-group">

                      <label htmlFor="name">Name</label>

                      <input
                        type="text"
                        className={classnames
                          ('form-control', { 'is-invalid': errorsName })}
                        placeholder="Name . . . "
                        name="name"
                        value={name}
                        // onNameChange={this.onChange}
                        onChange={this.onChange}
                        error={errorsName}
                      />
                      {errorsName && <div className="invalid-feedback">{errorsName}</div>}

                    </div>

                    <div className="form-group">

                      <label htmlFor="email">Email</label>

                      <input
                        type="email"
                        className={classnames('form-control', { 'is-invalid': errorsEmail })}
                        placeholder="Email . . . "
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        error={errorsEmail}
                      />
                      {errorsEmail && <div className="invalid-feedback">{errorsEmail}</div>}
                    </div>

                    <div className="form-group">

                      <label htmlFor="name">Phone</label>

                      {<input
                        type="phone"
                        className={classnames
                          ('form-control', { 'is-invalid': errorsPhone })}
                        placeholder="Phone Number . . . "
                        name="phone"
                        value={phone}
                        onChange={this.onChange}
                        error={errorsPhone}
                      />}
                      {errorsPhone && <div className="invalid-feedback">{errorsPhone}</div>}
                    </div>

                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-outline-primary btn-block btn-word"
                    />

                  </form>
                </div>
              </div >

            </React.Fragment>
          )
        }}

      </Consumer>
    );

  }
}

AddContact.proptotype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default AddContact;