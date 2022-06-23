import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
      uid: '',
      username: '',
      firstname: '',
      lastname: '',
    },
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;
