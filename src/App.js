import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  searchHandler(e) {
    this.setState({searchField: e.target.value})
  }

  render () {
    // const { monsters } = this.state;
    const filteredMonsters = this.state.monsters.filter(monster => {
      if (monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())) {
        return monster;
      }
    })

    return <div className="App">
      <SearchBox placeholder="Search Monsters" searchHandler={e => this.searchHandler(e)}></SearchBox>

      <CardList monsters={filteredMonsters}></CardList>
  </div>
  }
}

export default App;
