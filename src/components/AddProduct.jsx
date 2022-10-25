import React from 'react'
import './AddProduct.css'

export default function AddProduct(props) {

    //function that validate the products array in the room by the rules given  
    const checkAdd=()=>{
        let productName = document.getElementById('dropdown').value

        if(productName == ''){
            alert('ERROR!')
            return props.setPage(1)
        }
        else if(props.rooms[props.roomIndex].products.length >= 5){  
            alert('ERROR!')
            return props.setPage(1)
        }
        else if(productName == 'stereo'){
            let temp = props.rooms[props.roomIndex].products.findIndex((val)=> val == 'stereo')
            if(temp != -1){
                alert('ERROR!')
                return props.setPage(1) 
            }else{
                props.addProduct(productName,props.roomIndex) //
                return props.setPage(1)
            }
        }
        else if(productName == 'waterHeater' && props.rooms[props.roomIndex].room != 'bathroom'){
            alert('ERROR!')
            return props.setPage(1)
        }
        else{
            props.addProduct(productName,props.roomIndex)
            return props.setPage(1)
        }
    }

  return (
    <div>
        <select className='productDropdown' id='dropdown'>
            <option value=''>pick a product</option>
            <option value='A.C'>A.C</option>
            <option value='stereo'>Stereo</option>
            <option value='light'>Light</option>
            <option value='waterHeater'>Water Heater</option>
        </select><br/>
        <button className='addproductBtn' onClick={checkAdd}>Add</button>
    </div>
  )
}


