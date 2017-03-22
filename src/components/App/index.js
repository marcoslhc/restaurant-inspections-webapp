import React, { Component } from 'react';
import '../../css/App.css';
import Header from '../Header.jsx';
import InspectionsApp from '../InspectionsApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <InspectionsApp />
        </div>
      </div>
    );
  }
}

export default App;
