import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User | null;
}

export interface Error {
    message?: string
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>){

            console.log("action: ", action);

            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>){
            console.log("loginSuccess: ", action);

            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<Error>){
            state.logging = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    }
})

//Actions
export const authActions = authSlice.actions;

//Selector

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

//Reducer

const authReducer = authSlice.reducer;
export default authReducer;