import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { increment } from "./counterSlice";

export function* log(action: PayloadAction){
    console.log('Action: ', action);
}

export function* log1(action: PayloadAction){
    console.log('Action counter/increment with effect takeLatest: ', action);
}

export default function* counterSaga() {
    console.log("Counter Saga");

   //  effect * nghia la listening any action
    yield takeEvery('*', log);
   // yield takeLatest('counter/increment', log1);
   yield takeLatest(increment().type, log1);
}