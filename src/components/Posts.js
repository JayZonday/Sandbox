import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postActions';
import './index.css';


class Posts extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    const postItems = this.props.posts.map(post => (
      <div className='post' key={post.id}>
        <h3> {post.title} </h3>
        <p> {post.body} </p>
      </div>
    ))
    return(
      <div className='post-field'>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})
export default connect(mapStateToProps, { fetchPosts })(Posts);
