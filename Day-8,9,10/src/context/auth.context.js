import { createContext, useContext, useEffect, useState } from "react";
import { LocalStorageKeys, hasAccess } from "../utils/shared";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePaths } from "../utils/enum";
import { toast } from 'react-toastify';
const initialUserValue = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
    role: "",
    password: ""
};
const initialState = {
    setUser: () => {},
    user: initialUserValue,
    signOut: () => {},
};

const authContext = createContext(initialState);

export const AuthWrapper = ({children}) => {
    const [user, _setUser] = useState(initialUserValue);
    
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const setUser = (user) => {
        localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(user));
        _setUser(user);
    }

    const signOut = () => {
        localStorage.removeItem(LocalStorageKeys.USER);
        _setUser(initialUserValue);
        navigate(RoutePaths.Login);
    }

    //If user has already signin 
    useEffect(() => {
        const str = JSON.parse(localStorage.getItem(LocalStorageKeys.USER)) || initialUserValue;
        if(str.id)
        {
            _setUser(str);
        }
        if(!str.id)
        {
            navigate(RoutePaths.Login);
        }
    },[]);
    
    useEffect(() => {
        if(pathname === RoutePaths.Login && user.id)
        {
            navigate(RoutePaths.BookListing);
        }
        if(!user.id)
        {
            return;
        }
        const access = hasAccess(pathname, user);
        if(!access)
        {
            toast.warning("Sorry, you are not authorized to access this page");
            navigate(RoutePaths.BookListing);
            return;
        }
        // setAppInitialize

    }, [pathname, user])

    const value = {
            user,
            setUser,
            signOut
    }

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(authContext);
}