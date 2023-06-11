import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import fulllogo from '../../public/fulllogo.png'
import NestedList from '../components/NestedList';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import chatImg from '../../public/chatroom.png'



export default function Chat() {

  const [menuCollapse, setMenuCollapse] = useState(false)

  const users = [
    {
      name:'Himanshu',
      avtar:'',
      live:false
    },
    {
      name:'Harish',
      avtar:'',
      live:false
    },
    {
      name:'Pooja',
      avtar:'',
      live:false
    }
  ]
  return (
    <div className='bg-purple-200 w-full h-screen flex p-5  justify-between space-x-2' >
      <div className={menuCollapse?'h-full w-20 bg-white rounded-xl transition-all ':' h-full w-1/5 bg-white rounded-xl transition-all'} >
          <header className='flex justify-between py-5 px-3 items-center' >
              <IconButton onClick={()=>{setMenuCollapse(!menuCollapse)}}  ><MenuIcon fontSize='large' /></IconButton>
              {!menuCollapse&& <img className='w-2/4' src={fulllogo} alt="" />}
          </header>

          <NestedList menuCollapse={menuCollapse} data={users} ></NestedList>


          
      </div>




      <div className={menuCollapse?' transition-all h-full bg-white w-full rounded-xl flex items-center justify-center flex-col':' transition-all h-full bg-white w-4/5 rounded-xl flex items-center justify-center flex-col'} >
          <img src='../../public/chatroom.png' alt="" />
          <p>Start a Chat</p>
      </div>
    </div>
  )
}
