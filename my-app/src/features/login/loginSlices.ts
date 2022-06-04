import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Login = {
  username: string;
  password: string;
  isLogin: boolean;
};

// type LoginState = {
//   list: Login[];
// };

const initialState = {
  username: "1",
  password: "1",
  isLogin: false,
} as Login;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    submit(state, action: PayloadAction<Login>) {
      if (
        state.password === action.payload.password &&
        state.username === action.payload.username
      ) {
        state.isLogin = true;
      }
    },
    clearState(state, action: PayloadAction<Login>) {
      state.isLogin = false;
    },
  },
});

export const { submit, clearState } = loginSlice.actions;

export default loginSlice.reducer;

export const loginSelector = (state: RootState) => state.login;
