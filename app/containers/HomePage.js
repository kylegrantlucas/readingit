import React, { Component } from 'react';
import Home from '../components/Home';
var Sidebar = require('react-sidebar').default;
import TitleBar from '../components/TitleBar';
import SidebarContent from '../components/SidebarContent';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

export default class HomePage extends Component {
  state = {
    open: false
  };
  onSetOpen(open) {
    this.setState({open: open});
  }
  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.menuButtonClick.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> Readit</span>
      </span>);

    const sidebarProps = {
      sidebar,
      docked: this.state.open,
      sidebarClassName: 'custom-sidebar-class',
      onSetOpen: this.onSetOpen.bind(this),
    };

    return (
      <Sidebar {...sidebarProps}>
        <TitleBar title={contentHeader}>
          <Home />
        </TitleBar>
      </Sidebar>
    );
  }
}

