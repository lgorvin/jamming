//import logo from './logo.svg';
import '../App/App.css';
import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { searchResults : [
      {name : "Riding", artist: "Aries", album: "Wunderworld", id : 1}, 
      {name : "Fall Apart", artist: "Post Malone", album: "Stoney", id : 2}, 
      {name : "name3", artist: "artist3", album: "album3", id : 3}, 
      {name : "name4", artist: "artist4", album: "album4", id : 4}]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

