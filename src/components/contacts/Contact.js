import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  }

  render() {
    const { id, name, email, phone } = this.props.contactt;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {

          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">

              <h4>{name}{' '}

                <i className="fas fa-sort-down"
                  // add pointer
                  style={{ cursor: 'pointer' }}
                  // on click showContactInfo change his state
                  onClick={() => this.setState({
                    showContactInfo: !this.state.showContactInfo
                  })}></i>

                {/* Delete */}
                <i className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: '#D9534F' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
              </h4>


              {/* if showContatInfo is true pirt ul */}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>) : null}

            </div >
          )
        }}
      </Consumer>

    )
  }
}

Contact.proptotype = {
  contact: PropTypes.object.isRequired,
};

export default Contact;