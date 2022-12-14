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

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this);
  }
  
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks : tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let result = [];

    for (let i = 0; i < tracks.length; i++) {
        if (track.id !== tracks[i].id) {
            result.push(tracks[i]);
        }
    }

    this.setState({
        playlistTracks : result
    })
}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}

