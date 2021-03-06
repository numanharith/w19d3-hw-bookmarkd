import axios from 'axios'
import React, { Component } from 'react'

export default class UpdateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.bookmark.title,
      url: this.props.bookmark.url     
    }
  }

  updateData = async () => {
    try {
      const response = await axios.put(`/bookmarks/${this.props.bookmark._id}`, {
        title: this.state.title,
        url: this.state.url
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.updateData();
    await this.props.fetchdata();
    this.props.toggleEdit();
  }

  render() {
    return this.props.edit ? (
      <form className='toggle' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
          id='title'
        />
        <input
          type='text'
          value={this.state.url}
          onChange={this.handleChange}
          id='url'
        />
        <input type='submit' />
      </form>
    ) : ''
  }
}
