import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '.'

const PrivateRoute = () => {
    return  isAuthenticated() && isAuthenticated().user.rolle ===0 ?<Outlet/>:(<Navigate to='/signin'/>)
}

export default PrivateRoute
