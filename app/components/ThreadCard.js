import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './ThreadCard.css';
import { bindActionCreators } from 'redux';
import * as ThreadCardActions from '../actions/threadCard';

class ThreadCard extends Component {
  static propTypes = {
    thread: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={styles.card} onClick={() => this.props.openThread(this.props.thread)}>
        <h2>
          {this.props.thread.title}
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ThreadCardActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadCard);
