import React from 'react';
import Page1 from './Page1.js';
import Page2 from './Page2.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 'Home' };
    this.redirect = this.redirect.bind(this);
  }
  redirect(page) {
    this.setState({ currentPage: page });
  }
  render() {
    console.log(this.state.currentPage);
    return (
      <div>
        <h2>Meoww</h2>
        { this.state.currentPage === 'Home' ? <div><h1>Home Page</h1><button onClick={() => this.redirect('Page1')}> Page 1 goooooo</button></div> : null }
        { this.state.currentPage === 'Page1' ? <Page1 redirect={this.redirect} /> : null }
        { this.state.currentPage === 'Page2' ? <Page2 redirect={this.redirect} /> : null }
      </div>
    );
  }
}