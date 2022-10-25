import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RoomPage.css'
import AddProduct from './AddProduct'
import Room from './Room'


export default function RoomPage(props) {

  //hook for page display
    const[page,setPage] = useState(1)

    //shows room component as default but after pressing add product button the AddProduct componnent shows at same URL 
    const showPages = ()=>{
        if(page == 1){
            return <Room colorsArr={props.colorsArr} setArr={props.setArr} rooms={props.rooms} roomIndex={props.roomIndex} setPage={setPage}/>
        }
        else if(page == 2){
            return <AddProduct rooms={props.rooms} roomIndex={props.roomIndex} setPage={setPage} addProduct={props.addProduct}/>
        }
    }
    //when exiting the room page saves colors(state) of products in the room to local storage under the room name 
    const saveBtnColors = ()=>{
      localStorage.setItem(`${props.rooms[props.roomIndex].roomName}`,JSON.stringify(props.colorsArr))
    }

  return (
    <div>
       {showPages()}
       <Link to='/'>
        <button className='homeBtn' onClick={()=>{saveBtnColors()}}>home</button>
       </Link>
      
    </div>
  )
}
