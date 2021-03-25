import axios from 'axios'
import React, { Component } from 'react'
import UpdateForm from './UpdateForm';

class Bookmark extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }
  
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  deleteBookmark = async (id) => {
    try {
      const response = await axios.delete(`/bookmarks/${id}`)
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <h4 onClick={() => window.open(this.props.bookmark.url, '_blank')}>
          {this.props.bookmark.title}
        </h4>
        <button 
          className='edit-btn'
          onClick={this.toggleEdit}
        >
          {this.state.edit ? 'Close' : 'Edit'}
        </button>
        <button 
          onClick={() => this.deleteBookmark(this.props.bookmark._id)}
        >
          Delete
        </button>
        <UpdateForm
          edit={this.state.edit}
          bookmark={this.props.bookmark} 
          fetchdata={this.props.fetchdata}
          toggleEdit={this.toggleEdit} 
        />
      </>
    )
  }
}

export default Bookmark
