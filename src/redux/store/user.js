import {createSlice, PayloadAction} from '@reduxjs/toolkit';

let initialUser = {
  uid: '',
  username: '',
  firstname: '',
  lastname: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: initialUser,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: state => {
      state.userData = initialUser;
    },
  },
});

export const {setUserData, clearUserData} = userSlice.actions;
export default userSlice.reducer;
