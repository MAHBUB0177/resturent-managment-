import React from 'react'
import Rooms from './Rooms'
import { RoomsItem } from './RoomsItem'


const RoomsList = ({rooms}) => {
  if(rooms.length === 0){
    return (
      <div>
        <h3>unfortunetly no rooms matches your search patameters.</h3>
      </div>
    )
  }
  return (
    <section>
      <div>
        {
          rooms?.map((item)=>{
          
            return <RoomsItem key={item.id}  room={item} />
          })
        }
      </div>
    </section>
  )
}

export default RoomsList