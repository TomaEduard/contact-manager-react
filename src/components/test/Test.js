import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  // // axios req
  // componentDidMount() {
  //   axios.get('http://jsonplaceholder.typicode.com/users')
  //     .then(res => this.setState({ contacts: res.data }))
  // }

  // // fetch req
  // componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/posts/1')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       title: data.title,
  //       body: data.body
  //     }))
  // }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps...');
  // }

  // static getDerivedStateFromProps(props, state)

  render() {
    const { title, body } = this.state;
    return (

      <div >
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;