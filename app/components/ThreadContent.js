import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './ThreadContent.css';


class ThreadContent extends Component {
  static propTypes = {
    thread: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={styles.containerWebview}>
        <webview src={this.props.thread.url} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    thread: state.openThread
  };
}

export default connect(mapStateToProps)(ThreadContent);
