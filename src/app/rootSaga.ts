import authSaga from 'features/counter/auth/authSaga';
import counterSaga from 'features/counter/counterSaga';
import {all} from 'redux-saga/effects';

function* heloSaga() {
    console.log('Hello Saga');
}

export default function* rootSaga() {
    console.log("Root Saga");

   yield all([heloSaga(), counterSaga(), authSaga() ]);
}
