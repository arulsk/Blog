import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import {useDispatch,useSelector} from 'react-redux';
import {SelectSignIn,setSearchInput, setSignIn,SelectName, SelectProfile, setProfile} from '../features/userSlice'
import '../styling/navBar.css'

function NavBar() {
    const [inputValue,setInputValue] = useState("tech")
    const isSignIn = useSelector(SelectSignIn)
    const userPic = useSelector(SelectProfile)
    const userName = useSelector(SelectName)

    const dispatch = useDispatch();
 const logout = ()=>{
  dispatch(setSignIn(false));
  dispatch(setProfile(null))

 }
    
    const handleClick = (e)=>{
      e.preventDefault()
        dispatch(setSearchInput(inputValue))
    } 
    const updateSearchInput = (e)=>{setInputValue(e.target.value)}

  return (
    <div className='navBar'>
    <h1 className='navBarHeader'>Blog</h1>
    { isSignIn ?  (<div className="navSearch">
        <input type='text' value = {inputValue} onChange={updateSearchInput} placeholder='Search for blog'/>
        <button type="submit" onClick={handleClick}>Search</button>
    </div>) : "" }
    
    { isSignIn ?( <div className="profile">
        <Avatar className='pic' src= {userPic}  />
        <h1 className='signIn' style={{color:"white"}}>{userName}</h1>
        <button className='btn' onClick={logout}>Logout</button>

        
    </div>) : (<><h1 className='signout'> user not available</h1></>) }
    </div>
  )
}

export default NavBar