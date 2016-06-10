import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ThreadList from '../components/ThreadList';
import ThreadContent from '../components/ThreadContent';
import CommentList from '../components/CommentList';
import Resizable from 'react-resizable-box';


export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.containerRight}>
          <ThreadList />
        </div>
        <div className={styles.containerLeft}>
          <ThreadContent />
          <CommentList />
        </div>
      </div>
    );
  }
}




