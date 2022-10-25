import React from 'react'
import './Room.css'


export default function Room(props) {
  
    //function that changes the product color after clicking on product
const changeColor =(i)=>{
    if(props.colorsArr[i] == 'red'){
        props.setArr[i]('green') // setArr is an array containg the set part of hooks for the colors 
    }
    else{
        props.setArr[i]('red')
    }
}

  return (
    <div>
         <div className='roomInfoDiv'>
        <p>room: {props.rooms[props.roomIndex].room}</p>
        <p>room name: {props.rooms[props.roomIndex].roomName}</p>
        </div>
        <div className='productDiv'>
            {
            props.rooms[props.roomIndex].products.map((val,index)=>{
                return <button className='product' style={{backgroundColor:props.colorsArr[index]}}  onClick={()=>{changeColor(index)}}>{val}</button>
            })}
        </div>
        <button className='addProductBtn' onClick={()=>{props.setPage(2)}}>add product</button>
    </div>
  )
}
