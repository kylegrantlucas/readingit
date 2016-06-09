import React, { Component, PropTypes } from 'react';
import styles from './ThreadList.css';
import ThreadCard from './ThreadCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Resizable from 'react-resizable-box';
import Snoowrap from 'snoowrap';
import * as ThreadListActions from '../actions/threadList';


class ThreadList extends Component {
  componentDidMount() {
    const r = new Snoowrap({
      client_id: 'XT5AV19GYeWMew',
      client_secret: 'g6IQWScHYuSc17C7zG89U3lgfwE',
      refresh_token: '14274046-8wGjg7O07gGt7KLH3OBrZfME3A0',
      user_agent: 'Electron:io.readit:v0.0.1 (by /u/thejazi13)'
    });

    r.get_hot().then(data => this.props.addThread(data));
  }

  render() {
    return (
      <Resizable width={'30%'} height={'100%'} minWidth={100} minHeight={5000} maxWidth={700} maxHeight={5000}>
        <span>{this.props.threads.map(thread => <ThreadCard key={thread.id} thread={thread} />)}</span>
      </Resizable>
    );
  }
}

ThreadList.propTypes = {
  addThread: PropTypes.func.isRequired,
  threads: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    threads: state.threads
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ThreadListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadList);
