import React from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Store from './Components/Store';


class App extends React.Component {
  state = {
    books: []
  };



  render() {
    return (
      <div className='App'>
        <Header />
        <Form />
        <Store />
      </div>
    );
  }



}

export default App;