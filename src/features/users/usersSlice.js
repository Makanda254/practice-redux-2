import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Victor Makanda' },
    { id: '1', name: 'Edwin Lutta' },
    { id: '2', name: 'Jay Mark' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer