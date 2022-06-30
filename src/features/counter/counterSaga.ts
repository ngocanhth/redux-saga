import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementBySaga, incrementBySagaSuccess } from "./counterSlice";

export function* log(action: PayloadAction){
    console.log('Action: ', action);
}

export function* log1(action: PayloadAction){
    console.log('Action counter/increment with effect takeLatest: ', action);
}

export function* handleIncreasementSaga(action: PayloadAction<number>){
    console.log("Waiting 2s");

    yield delay(2000);

    console.log("Waiting done, dispatch action");

    yield put(incrementBySagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log("Counter Saga");

   //  effect * nghia la listening any action
    yield takeEvery('*', log);
   // yield takeLatest('counter/increment', log1);
 //  yield takeLatest(increment().type, log1);
    yield takeEvery(incrementBySaga.toString(), handleIncreasementSaga);
 //   yield takeLatest(incrementBySaga.toString(), handleIncreasementSaga);
}