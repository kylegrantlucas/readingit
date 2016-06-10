import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './CommentCard.css';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class CommentCard extends Component {
  render() {
    return (
      <div className={styles.card}>
        <Card>
          <CardHeader
            title={this.props.comment.body}
          />
        </Card>
      </div>
    );
  }
}

export default CommentCard;
