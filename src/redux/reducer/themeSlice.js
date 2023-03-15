import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    darkModeOn: state =>{
        state.value = true
    },
    darkModeOff: state =>{
        state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { darkModeOn, darkModeOff } = themeSlice.actions
export const darkModeSelector = state => state.persistedreducer.theme.value
export default themeSlice.reducer