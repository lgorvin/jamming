//import logo from './logo.svg';
import '../App/App.css';
import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      searchResults : [{name : "Riding", artist: "Aries", album: "Wunderworld", id : 1}, 
      {name : "Fall Apart", artist: "Post Malone", album: "Stoney", id : 2}, 
      {name : "name3", artist: "artist3", album: "album3", id : 3}, 
      {name : "name4", artist: "artist4", album: "album4", id : 4}], 
      playlistName: 'My Playlist',
      playlistTracks : [{name : "playlistname1", artist: "Aries", album: "Wunderworld", id : 1}, 
      {name : "playlistname2", artist: "Post Malone", album: "Stoney", id : 2}, 
      {name : "playlistname3", artist: "artist3", album: "album3", id : 3}, 
      {name : "playlistname4", artist: "artist4", album: "album4", id : 4}]
    }
  }
  
  addTrack(track) {
    if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return
    }
    this.state.playlistTracks.push(track)
    this.setState({ playlistTracks : this.state.playlistTracks })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

