import { createSlice } from "@reduxjs/toolkit";

const init = {
    loading: false,
    user : null,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState: init,
    reducers: {
        getuserrequest: state=>{
            return {
                ...state,
                loading: true,
            }
        },
        getusersuccess: (state,action)=>{
            return {
                user:action.payload,
                loading: false,
                error: false,
            }
        },
        getuserfailure: state=>{
            return {
                ...state,
                error: true,
                loading : false,
            }
        },
        getuserlogout: state=>{
            return {
                ...state,
                user: null,
                loading: false
            }
        }
    }
})
export const {getusersuccess,getuserfailure,getuserlogout,getuserrequest} = userSlice.actions
export const getuser = state => state.persistedreducer.user
export default userSlice.reducer