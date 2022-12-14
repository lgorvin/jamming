import TrackList from '../TrackList/TrackList'
import React, { Component } from 'react'
import '../Playlist/Playlist.css'

export default class Playlist extends Component {
  render() {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
  }
}
