import Header from './Header';
import SearchResult from './SearchResult';
import Footer from './Footer';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchResult />
        <Footer />
      </div>
    );
  }
}

export default App;
