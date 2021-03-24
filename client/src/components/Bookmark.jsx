import axios from 'axios'
import React, { Component } from 'react'
import UpdateForm from './UpdateForm';

class Bookmark extends Component {
  deleteButtonStyle = {
    color: 'red',
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
        <h4>
          <span 
            onClick={() => this.deleteBookmark(this.props.bookmark._id)}
            style={this.deleteButtonStyle}
          >X </span>
          {this.props.bookmark.title}
          <span> {this.props.bookmark.url}</span>
        </h4>
        <UpdateForm
          bookmark={this.props.bookmark} 
          fetchdata={this.props.fetchdata} 
        />
      </>
    )
  }
}

export default Bookmark
