import React, { Component } from 'react';
import List from './list';

import './App.css'

import data from './birthdayData'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      birthday: data
    }

  }
  handleClick = () => {
    this.setState({ birthday: [] })
  }

  render() {

    return (
      <div className='app'>
        <h1>{this.state.birthday.length}</h1>
        {this.state.birthday.map(people =>
          <List key={people.id} people={people} />
        )}
        <button onClick={this.handleClick}>Clear all</button>


      </div>
    )
  }
}

export default App

