import { createSlice } from "@reduxjs/toolkit";

export const themeColor = createSlice({
    name:'theme',
    initialState:{color:''},
    reducers:{
        setData:(state,action)=>{  
          return  state = state.merge(action.payload)   
        }
    }
})

export const {setData} =  themeColor.actions

export default themeColor.reducer;
