import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Profiles from './components/Profiles'
//import Skill-list from './components/Skill-list'


class App extends Component {
  state = {
    listings: []
  }
  render() {
    return (
      <div className="App">

        <Header />
        <Profiles listings={this.state.listings} />
        <Footer />

      </div>
    );
  }
}

export default App;
