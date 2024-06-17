import React,{useEffect} from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider, useDispatch } from 'react-redux';
import { setAuth } from "./store/authSlice";
import store from "./store/store";

const AuthInitializer = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("auth"));
        if (data) {
            dispatch(setAuth({ user: data.user, token: data.token }));
        }
    }, [dispatch]);

    return children;
};

const Layout = () => {
    return (
        <Provider store={store}>
        <AuthInitializer>
            <Header />
            <Outlet />
        </AuthInitializer>
        </Provider>
    );
};

export default Layout;
