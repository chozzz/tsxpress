import { createAsyncThunk } from "@reduxjs/toolkit";

export const UserActions = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  noop: createAsyncThunk("user/noop", async (args: any, thunkAPI) => {}),
};
