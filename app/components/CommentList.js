import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './CommentList.css';
import { bindActionCreators } from 'redux';
import CommentCard from './CommentCard';
import * as CommentListActions from '../actions/commentList';
import Snoowrap from 'snoowrap';

class CommentList extends Component {
  componentDidUpdate(prevProps, prevState) {
    const r = new Snoowrap({
      client_id: 'XT5AV19GYeWMew',
      client_secret: 'g6IQWScHYuSc17C7zG89U3lgfwE',
      refresh_token: '14274046-8wGjg7O07gGt7KLH3OBrZfME3A0',
      user_agent: 'Electron:io.readit:v0.0.1 (by /u/thejazi13)'
    });
    if (prevProps.thread.id !== this.props.thread.id) {
      this.props.clearOpenCommentThread();
      r.get_submission(this.props.thread.id).fetch().then(data => this.props.addCommentToThread(data.comments));
    }
  }

  render() {
    return (
      <div className={styles.containerComments}>
        {this.props.comments.map(comment => <CommentCard comment={comment} />)}
      </div>
    );
  }
}

CommentList.propTypes = {
  addCommentToThread: PropTypes.func.isRequired,
  clearOpenCommentThread: PropTypes.func.isRequired,
  thread: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    thread: state.openThread,
    comments: state.openCommentThread
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommentListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);

