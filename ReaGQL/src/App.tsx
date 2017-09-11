import * as React from 'react';
import './App.css';
import { gql, graphql } from 'react-apollo';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default graphql(gql`
  {
    days(buildingId: "58ed211899c6b9a3b02e8acd", page: 1, pageSize: 10) {
      page
      pageSize
      content {
        date
      }
    }
  }
`)(App);
