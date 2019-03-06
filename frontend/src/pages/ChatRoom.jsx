import React, { Component } from 'react'
import Rooms from '../components/roomsTile/roomsComponent'

export default class ChatRooms extends Component {
  render() {
    return (
      <div className="container">
        <h2>Select a Room</h2>
        <Rooms />
      </div>
    )
  }
}
