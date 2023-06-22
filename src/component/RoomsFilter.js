import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'

const RoomsFilter = ({rooms}) => {
  const context=useContext(RoomContext)
  const{
    handelChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets

  }=context;
  console.log(context);

  const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
  }

 
//get Unique type
  let types=getUnique(rooms ,'type')
  types=['all',...types]
  //map jsx
  types=types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
  })

  //get unique capacity
  let people=getUnique(rooms,'capacity')
  people=people.map((item,index)=>{
    return <option key={index} value={item}>
{item}
    </option>
  })

  return (
    <div style={{marginBottom:'30px'}}>
      <div style={{textAlign:'center',marginTop:'30px',}}><h2>Search Rooms</h2></div>
    <form>
    <div className='container row'>
      {/* select type */}
      <div className='form-group  col-md-2 ' style={{marginLeft:'5px'}}>
        <label htmlFor='type'>room type</label>
        <select name='type'
        id="type" value={type} className='form-control'
        onChange={handelChange}> {types}
        </select>
      </div>
      {/* end select type */}

      {/* guest */}
      <div className='form-group  col-md-2 ' style={{marginLeft:'5px'}}>
        <label htmlFor='capacity'>Guest</label>
        <select name='capacity'
        id="capacity" value={capacity} className='form-control'
        onChange={handelChange}> {people}
        </select>
      </div>

      {  /* price range */}
      <div className='from-group col-md-2' style={{marginLeft:'5px'}}>
        {/* <label htmlFor='price'>room price ${price}</label> */}
        <input type='range' name='price' 
        min={minPrice} max={maxPrice} id='price'
        value={price} onChange={handelChange} 
        style={{color:'gray'}}
        />
      </div>


      {/* room size */}
      <div className='from-group col-md-4'>
        <label htmlFor='size'>room Size</label>
        <div className='d-flex' >
       <input type={'number'}
        name='minSize'
        id='size' value={minSize}
        onChange={handelChange} ></input>

        <input type={'number'}
        style={{marginLeft:'2px'}}
        name='maxSize'
        id='size' value={maxSize}
        onChange={handelChange} />

         {/* breakfast and pets */}
      <div className='from-group col-md-3' style={{marginLeft:'50px'}}>
       
        <input type={'checkbox'} 
        name='breakfast'
        id='breakfast'
        checked={breakfast}
        onChange={handelChange}/>
         <label htmlFor='breakfast' style={{marginLeft:'5px'}}>breakfast</label>
      </div>

      <div className='from-group col-md-3' style={{marginLeft:'0px'}}>
       
        <input type={'checkbox'} 
        name='pets'
        id='pets'
        checked={ pets}
        onChange={handelChange}/>
         <label htmlFor='pets' style={{marginLeft:'5px'}}>pets</label>
      </div>
        </div>
        
      </div>
    
    
</div>

      </form>

    </div>
  )
}

export default RoomsFilter