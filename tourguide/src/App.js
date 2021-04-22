import React, { Component } from 'react'
import './App.css';
import Tours from './tours'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: '',


    }
  }
  removeTour = (id) => {
    console.log(id)
  }

  componentDidMount() {
    fetch('https://course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => this.setState({ list: data }))

  }

  render() {

    return (
      < div >
        {this.state.list.length <= 0 ?
          <h1>loading....</h1> :
          <Tours tour={this.state.list} removeTour={this.removeTour()} />
        }


      </div >
    )
  }
}

export default App

