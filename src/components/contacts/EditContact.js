import React, { Component } from 'react';
import { Consumer } from '../../context';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errorsName: '',
    errorsEmail: '',
    errorsPhone: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await Axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  // cr8 object with user input values
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

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

    const updateContact = {
      name,
      email,
      phone
    }

    const { id } = this.props.match.params;

    // if contact doesn't have id, it will come from res
    const res = await Axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, updateContact);

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data })

    // Clear state
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

              {/* <h1 className="display-6 mb-2">
                <span className="text-danger">Edit Contact</span>
              </h1> */}

              < div className="card mb-3" >
                <div className="card-header">Edit Contact</div>
                <div className="card-body">

                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                    <div className="form-group">

                      <label htmlFor="name">Name</label>

                      <input
                        type="text"
                        className={classnames('form-control', { 'is-invalid': errorsName })}
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
                        className={classnames('form-control', { 'is-invalid': errorsPhone })}
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
                      value="Update Contact"
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

EditContact.proptotype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default EditContact;