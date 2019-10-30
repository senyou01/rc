import React from 'react';
import Header from '../app-header/Header';
import GridHeader from '../grid-header/GridHeader';
import GridData from '../grid-data/GridData';
import Pagination from '../grid-footer/Pagination';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <GridHeader></GridHeader>
        <GridData></GridData>
        <Pagination></Pagination>
      </div>
    );
  }
}

export default App;
