import React, { Component, PropTypes } from 'react';
import TitleBar from './TitleBar';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

class SidebarContent extends Component {
  render() {
    const style = this.props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
    const links = [];

    for (let ind = 0; ind < 10; ind++) {
      links.push(
        <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
    }
    return (
      <TitleBar title="Menu" style={style}>
        <div style={styles.content}>
          <a href="index.html" style={styles.sidebarLink}>Home</a>
          <div style={styles.divider} />
          {links}
        </div>
      </TitleBar>
    );
  }
}

export default SidebarContent;
