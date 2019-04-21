import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // Se apeleaza o functie a parintelui(avem props)
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }

  render() {
    const { name, email, phone } = this.props.contactt;
    const { showContactInfo } = this.state;

    // console.log(this.props.contactt.name);

    return (

      <div className="card card-body mb-3 p-3">

        <h4>{name}{' '}

          <i className="fas fa-sort-down"
            // add pointer
            style={{ cursor: 'pointer' }}
            // on click showContactInfo change his state
            onClick={() => this.setState({
              showContactInfo: !this.state.showContactInfo
            })}></i>

          <i className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: '#D9534F' }}
            // Se apeleaza o functie locala onDeleteClick
            onClick={this.onDeleteClick}
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
  }
}

Contact.proptotype = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;