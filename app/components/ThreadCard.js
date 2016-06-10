import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './ThreadCard.css';
import { bindActionCreators } from 'redux';
import * as ThreadCardActions from '../actions/threadCard';
import { Card, CardHeader } from 'material-ui/Card';

class ThreadCard extends Component {
  static propTypes = {
    thread: PropTypes.object.isRequired,
    openThread: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className={styles.card} onClick={() => this.props.openThread(this.props.thread)}>
        <Card>
          <CardHeader
            avatar={this.props.thread.thumbnail}
            title={this.props.thread.title}
            subtitle={'r/' + this.props.thread.subreddit.display_name + ' - ' + this.props.thread.domain}
          />
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ThreadCardActions, dispatch);
}

export default connect(() => ({}), mapDispatchToProps)(ThreadCard);
