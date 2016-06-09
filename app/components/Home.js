import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ThreadList from '../components/ThreadList';
import ThreadContent from '../components/ThreadContent';
import CommentList from '../components/CommentList'

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ThreadList />
        <ThreadContent />
        <CommentList />
      </div>
    );
  }
}




