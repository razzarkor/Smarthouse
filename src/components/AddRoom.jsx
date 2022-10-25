import React, { useState } from 'react'
import './AddRoom.css'
import { Link } from 'react-router-dom'

export default function AddRoom(props) {

    //hooks that get the input from user
    const[roomName,setRoomName] = useState('')
    const[roomColor,setRoomColor] = useState('')
  
    //function that check if input entered is valid and sends to app if valid 
    const validRoom = ()=>{
        if(roomName.length < 1 || document.getElementById('dropdown').value == ''){
            alert('ERROR!')
        }
        else{
            let room = document.getElementById('dropdown').value;
            props.add(room,roomName,roomColor)
        }
    }

  return (
    <div>
        <div className='infoDiv'>
            <select className='dropdown' id='dropdown'>
                <option value=''>pick new room</option>
                <option value='bedroom'>bedroom</option>
                <option value='bathroom'>bathroom</option>
                <option value='kitchen'>kitchen</option>
            </select><br/>
            <input className='nameInput' onChange={(e)=>{setRoomName(e.target.value)}} type='text' placeholder='room name' maxLength='5'/><br/>
            <label className='colorTitle' for="roomColor">room Color: </label>
            <input className='colorInput' onChange={(e)=>{setRoomColor(e.target.value)}} type='color' id='roomColor' name='roomColor'/>
        </div>
        <Link to='/'><button className='createBtn' onClick={validRoom}>create</button></Link>
    </div>
  )
}
