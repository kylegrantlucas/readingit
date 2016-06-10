import React, { Component, PropTypes } from 'react';
import styles from './CommentCard.css';
import { Card, CardHeader } from 'material-ui/Card';

class CommentCard extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  };

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
