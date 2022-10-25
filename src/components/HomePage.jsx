import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'


export default function HomePage(props) {

  //function that get index of the room when clicked
    const getIndex = (index)=>{
        props.roomIndex(index);
    }

  //function that gets the room products colors (state) from local storage as we enter the room page 
    const getProductColors = (roomName,index)=>{
      let temp = JSON.parse(localStorage.getItem(`${roomName}`))
      if(props.rooms[index].products.length == 0){
        for(let i=0;i<temp.length;i++){
          props.setArr[i]('red')
        }
      }
      else{
        for(let i=0;i<temp.length;i++){
          props.setArr[i](temp[i])
        }
      }
    }

  return (
    <div>
        <div className='roomsDiv'>
        {props.rooms.map((val,index)=>{
            return <Link to={`/room/${val.roomName}`}> {/*with the backtic we get the room name in the URL*/}
                <button className='roomBtn' onClick={()=>{getIndex(index);getProductColors(val.roomName,index)}} style={{backgroundColor: val.roomColor}}>{val.roomName}</button>
                </Link>
    })}
        </div>
        <Link to='/addroom'><button className='addBtn'>+</button></Link>
    </div>
  )
}
