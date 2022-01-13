import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Confirm from './pages/Confirm'
import CartPage from './pages/CartPage'
import DealsPage from './pages/DealsPage'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import UserDashBord from './pages/UserDashBord'
import PrivateRoute from './pages/PrivateRoute'
import AdminRoute from './pages/AdminRoute'
import AdminDashBord from './pages/AdminDashBord'
import ForgotPassword from './pages/ForgotPassword'

const MyRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/signin' element={<SignInPage/>} />
                <Route path='/email/confirmation/:token' element={<Confirm/>} />
                <Route path='/signup' element={<SignUpPage/>} />
                <Route path="/forgotpassword" element={<ForgotPassword/>}/>
                {/* <Route path='/user/profile' element={<UserDashBord/>} /> */}
                <Route path='/user/*' element={<PrivateRoute/>}>
                    <Route path='profile' element={<UserDashBord/>}/>
                </Route>
                <Route path='/admin/*' element={<AdminRoute/>}>
                    <Route path='dashbord' element={<AdminDashBord/>}/>
                </Route>

                <Route path='/deals' element={<DealsPage/>} />
                <Route path='/cart' element={<CartPage/>} />
            </Routes>
        </Router>
    )
}

export default MyRouter
