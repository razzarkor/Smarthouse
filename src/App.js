import './App.css';
import {useState} from 'react';
import {Route,Routes} from 'react-router-dom'
import Title from './components/Title';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import RoomPage from './components/RoomPage';



function App() {
  // hook that gets the rooms added to an array
  const[rooms,setRooms] = useState([]);
  // add new room with variables from inputs at AddRoom component
  const addRooms = (room,roomName,roomColor)=>{
    let temp = new Room(room,roomName,roomColor)
    setRooms([...rooms,temp])
    localStorage.setItem(`${roomName}`,JSON.stringify(colorsArr))  //saving in local storage products colors with room name as key 
  }

  //products color as hook array, sending the arrays to relevent components(Room,RoomPage).
  const[color1,setColor1]= useState('red')
  const[color2,setColor2]= useState('red')
  const[color3,setColor3]= useState('red')
  const[color4,setColor4]= useState('red')
  const[color5,setColor5]= useState('red')
  let colorsArr =[color1,color2,color3,color4,color5]
  let setArr = [setColor1,setColor2,setColor3,setColor4,setColor5]

// add to products array in room class 
  const addProduct = (name,index)=>{
    rooms[index].products = [...rooms[index].products,name]
  }
// get the index of the room you are at from the rooms array 
  const[roomIndex,setRoomIndex] = useState()

  return (
    <div className="App">
      <div className='titleDiv'>
        <Title/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage setArr={setArr} rooms={rooms} roomIndex={setRoomIndex}/>}/>
        <Route path='/addroom' element={<AddRoom add={addRooms}/>}/>
        <Route path={`/room/:roomName`} element={<RoomPage colorsArr={colorsArr} setArr={setArr} rooms={rooms} roomIndex={roomIndex} addProduct={addProduct}/>} />
      </Routes>
      

    </div>
  );

}


export default App;

class Room {
  room = ''
  roomName = '';
  roomColor = '';
  products = [];

  constructor(room,roomName,roomcolor){
    this.room = room;
    this.roomName = roomName;
    this.roomColor = roomcolor;
  }

  }