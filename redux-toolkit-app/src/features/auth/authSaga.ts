import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);

    console.log("handlelogin", payload);
    localStorage.setItem("access_token", Math.random().toString());
    //redirect to admin page
    yield put(push("/admin"));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}
function* handleLogout() {
  yield delay(1000);
  console.log("handlelogout");
  localStorage.removeItem("access_token");
  //redirect to login page
  yield put(push("/login"));
}
function* watchLoginFlow() {
  while (true) {
    console.log("watch login");

    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
