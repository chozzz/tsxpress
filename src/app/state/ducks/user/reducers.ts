import { createSlice } from "@reduxjs/toolkit";
import { UserActions } from "./actions";

export interface IUserState {
  data: null;
  isFetching: boolean;
}

export const initialState: IUserState = {
  data: null,
  isFetching: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserActions.noop.fulfilled, (userState: IUserState) => {
      console.log({ userState });
    });
  },
});

// Actions generated from the slice
// export const { } = userSlice.actions;

// The reducer
const userReducer = userSlice.reducer;
export default userReducer;
