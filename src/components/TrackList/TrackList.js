import React, { Component } from 'react'
import '../TrackList/TrackList.css'
import Track from '../Track/Track.js'

export default class TrackList extends Component {
  render() {
    return (
        <div className="TrackList">
            {
              this.props.tracks.map(track => { return <Track track={track} key={track.id}/> }
              )
            }
        </div>
    )
  }
}
