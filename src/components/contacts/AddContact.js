import React, { Component } from 'react'
import '../../App'


class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

  }


  // onNameChange = (e) => this.setState({ name: e.target.value });
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name . . . "
                  value={name}
                  // onNameChange={this.onChange}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email . . . "
                  value={email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number . . . "
                  value={phone}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                value="Add Contact"
                className="btn btn-outline-primary btn-block btn-word" />


            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact;