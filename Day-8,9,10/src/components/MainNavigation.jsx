import { RoutePaths } from "../utils/enum"
import { Route, Routes } from "react-router-dom"
import { Login } from "./Login/Login"
import { Register } from "./Register"
import { Home } from "./Home"
export const MainNavigation = () => {
    return(
        <Routes>
            <Route exact path={RoutePaths.Login} element={<Login/>}/>
            <Route exact path={RoutePaths.Register} element={<Register/>}/>
            <Route exact path={RoutePaths.Home} element={<Home/>}/>
            <Route exact path={RoutePaths.UpdateProfile} element={<Home/>}/>
            <Route exact path={RoutePaths.Books} element={<Home/>}/>
        </Routes>
    )
}