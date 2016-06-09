import React, { Component, PropTypes } from 'react';

const styles = {
  root: {
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#03a9f4',
    color: 'white',
    padding: '16px',
    fontSize: '1.5em',
  },
};

class TitleBar extends Component {
  render() {
    const rootStyle = this.props.style ? {...styles.root, ...this.props.style} : styles.root;

    return (
      <div style={rootStyle}>
        <div style={styles.header}>{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
};

export default TitleBar;
