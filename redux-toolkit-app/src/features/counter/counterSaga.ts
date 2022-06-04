import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { increment } from "./counterSlice";

export function* log(action: PayloadAction) {
  console.log("log", action);
}

export default function* counterSaga() {
  console.log("counterSaga");
  yield takeLatest("*", log);
}
