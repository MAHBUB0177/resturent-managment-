import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer, withRoomConsumer } from '../context'
import { Loading } from './Loading'

function RoomContainer({context}){
    const{loading,sortedRooms,rooms}=context;
    console.log(rooms,'=====rooms')

    if(loading){
    return <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Loading/>
    </div>
    }
    return(
        <div>
        <RoomsFilter rooms={rooms}/>
        <RoomsList rooms={sortedRooms}/>
    </div>
    )
}


export default withRoomConsumer(RoomContainer)