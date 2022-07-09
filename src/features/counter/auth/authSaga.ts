import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";
import { push } from 'connected-react-router';

function* handleLogin(payload: LoginPayload) {
  try {
        yield delay(1000);
    
        //  yield call(api ,payload) // app thuc te se thay bang effect goi api de check login
    
        console.log("sau 1s in ra handleLogin");
        // user lay dc tu API
        yield put(
            authActions.loginSuccess({
                id: 1,
                name: 'Easy Frontend',
            })
        );
        localStorage.setItem('access_token', 'fake_token');
    // redirect to admin page
    yield put(push('/admin/dashboard'));

  } catch (error) {
    yield put(authActions.loginFailed({message: "Wrong password or username"}));
  }
   
}

function* handleLogout() {
    yield delay(1000);
    localStorage.removeItem('access_token');
    // redirect to login page
    yield put(push('/login'));
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        console.log("isLoggedIn: ", isLoggedIn);
        
        if (!isLoggedIn) {
          const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
       
          console.log('action.payload: ', action.payload);

          yield fork(handleLogin, action.payload);
        }
    
        yield take(authActions.logout.type);
        yield call(handleLogout); // khong dung fork cho nay dc vi fork la none blocking, se chay tiep tuc listinging logout
      }
}
export default function* authSaga(){
    yield fork(watchLoginFlow);
}