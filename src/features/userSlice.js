import {createSlice} from '@reduxjs/toolkit'

 export const userSlice = createSlice({
    name:"user",
    initialState : {
        isSignIn : false,
        searchInput : "tech",
        name : null,
        profile : null,
        blogFact : null
    },
    reducers : {
        setSignIn : (state,action)=>{
            state.isSignIn = action.payload
        },
        
        setSearchInput : (state,action)=>{
            state.searchInput = action.payload
        },
        
        setName : (state,action)=>{
            state.name = action.payload
        },
        setProfile : (state,action)=>{
            state.profile = action.payload
        },
        setBlogFact : (state,action)=>{
            state.blogFact = action.payload
        }
    }
 }) 

 export const {setSignIn,setBlogFact,setSearchInput,setProfile,setName} = userSlice.actions;
 export const SelectSignIn = (state)=> state.user.isSignIn
 export const SelectBlogFact = (state)=> state.user.blogFact
 export const SelectSearchInput = (state)=> state.user.searchInput
 export const SelectName = (state)=> state.user.name
 export const SelectProfile = (state)=> state.user.profile

 export default userSlice.reducer   