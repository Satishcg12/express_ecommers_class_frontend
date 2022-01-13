import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { isAuthenticated } from '.'
const UserDashBord = () => {
    const {user} = isAuthenticated()
    return (
        <>
            <NavBar/>
                <h1>userInformation</h1>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
            <Footer/>
        </>
    )
}

export default UserDashBord
