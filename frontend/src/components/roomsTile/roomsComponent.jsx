import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class roomsComponent extends Component {
    constructor(props){
        super(props)

        this.state = { AvailableRooms: ['Crustaceans', 'Marine Mammals', 'Ocean Fishes'], roomSelection: null}
    } 

    handleRoomSelection = (name) => {
        this.setState({ roomSelection: name})
    }

    getRooms = () =>{
        return this.state.AvailableRooms
            .map(rooms =>    
                <div className="column card" >
                    <Link to={`/chatrooms/${rooms.split(' ').join('')}`}>
                        <button className="button" onClick={() => this.handleRoomSelection(rooms)}>
                            {rooms}
                        </button>
                    </Link>
                </div>);
    }

  render() {
    return (
    
      <div className="columns is-centered">
        <div className="">
        <br/>
        {this.getRooms()}
        </div>
      </div>
    )
  }
}
