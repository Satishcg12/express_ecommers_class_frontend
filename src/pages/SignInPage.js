import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '.'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const SignInPage = () => {
    const [userData, setUserData] = useState({
        email:'',
        password:'',
        error:'',
        redirectTo:false
    }) 
    
    const navigate = useNavigate()
    const {email, password, error, redirectTo} = userData
    const {user} = isAuthenticated()
    
    const handelChange=name => e=>{
        setUserData({...userData,error:false,[name]:e.target.value})
    }
    const handelSubmit =e=>{
        e.preventDefault()
        setUserData({...userData,error:false, redirectTo:false})
        signin({email, password})
        .then(data => {
            if (data.error) {
                setUserData({...userData, error:data.error})
            }
            else{
                authenticate(data,()=>{
                    
                setUserData({...userData, redirectTo:true})
                })
             }
        })
    }
    const showError=()=>{
        return <div className="alert alert-danger" role='alert' style={{display:error?'':'none'}}> sdfa{error}</div>
    }
    const redirectUser = () => {
        if ( redirectTo ) {
            if (user && user.rolle === 1){
                console.log('admin')
                return navigate('/admin/dashbord')
            }
            else if (user && user.rolle === 0){
                console.log('user')
                return navigate('/user/profile')
            }
            console.log('true');
        }
    }

    return (
        <>
        <NavBar/>
            <div className="container" style={{marginBottom:'200px'}}>
        <div className="d-flex justify-content-center">
            <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                <form>
                   {redirectUser()}
                   {showError()}
                    <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control" onChange={handelChange('email')} value={email} />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pass" id="password" placeholder="***********" className="form-control"  onChange={handelChange('password')} value={password}/>
                    </div>
                    
                    <div className="col-4 mb-3">
                        <button className="btn btn-primary form-control"  onClick={handelSubmit} >Signin</button>
                    </div>
                    <div className="col-4 offset-md-8">
                       <Link to="/forgotpassword" className="text-decoration-none text-secondary">Forget Password?</Link>
                    </div>

                </form>
            </div>
        </div>
    </div>
<Footer/>
        </>
    )
}

export default SignInPage
