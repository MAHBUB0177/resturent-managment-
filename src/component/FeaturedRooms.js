import React, { Component } from 'react'
import { RoomContext } from '../context'

export default class FeaturedRooms extends Component{
    static contextType=RoomContext;
 
    render(){
        const {featuredRooms: rooms}=this.context;
        console.log(rooms)
        return(
            <div>
            <p>hello this is feturedRooms</p>
            </div>
        )
    }
}

