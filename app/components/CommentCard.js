import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './CommentCard.css';

class CommentCard extends Component {
  render() {
    return (
      <div className={styles.card} >
        <h2>{this.props.comment.body}</h2>
      </div>
    );
  }
}

export default CommentCard;
