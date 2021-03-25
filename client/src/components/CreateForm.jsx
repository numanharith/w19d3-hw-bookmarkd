import React, { Component } from 'react'
import axios from 'axios';

export default class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      url: '',
    }
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  createNewData = async () => {
    try {
      const response = await axios.post('/bookmarks', {
        title: this.state.title,
        url: this.state.url,
      });
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createNewData();
    this.setState({
      title: '',
      url: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
          id='title'
          placeholder='title'
        />
        <input
          type='text'
          value={this.state.url}
          onChange={this.handleChange}
          id='url'
          placeholder='url'
        />
        <input type='submit' value='Add bookmark' />
      </form>
    )
  }
}
