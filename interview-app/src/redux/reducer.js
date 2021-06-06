import {createSlice} from "@reduxjs/toolkit"
import users from "../components/data.js"
const initialState=users;

const usersReducers=createSlice({
    name:'users',
    initialState,
    reducers:{
        removeUsers:(state,action)=>{
            return state.filter(item=> item.id!==action.payload);
        },
        saveUsers:(state,action)=>{
            
            return localStorage.setItem('users', JSON.stringify(state));
            
        }
    }
})
export const {removeUsers,saveUsers}=usersReducers.actions;
export const reducer=usersReducers.reducer