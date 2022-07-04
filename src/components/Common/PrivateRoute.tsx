import * as React from 'react';

import { Navigate, Outlet } from "react-router-dom";


export interface IPrivateRoute {
    redirectPath: string;
    children?: JSX.Element;
}

export const PrivateRoute = (props: IPrivateRoute) => {
    const { redirectPath, children } = props;
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;;
};