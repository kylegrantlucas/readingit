import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './ThreadCard.scss';
import { bindActionCreators } from 'redux';
import * as ThreadCardActions from '../actions/threadCard';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class ThreadCard extends Component {
  static propTypes = {
    thread: PropTypes.object.isRequired,
    openThread: PropTypes.func.isRequired
  };

  render() {
    return (
      <div styles={styles.card} onClick={() => this.props.openThread(this.props.thread)}>
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

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ThreadCardActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadCard);
