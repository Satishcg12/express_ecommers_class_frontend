import React, { useState } from "react";
import { signup } from ".";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const SignUpPage = () => {
  const [value, setValue] = useState({
    name:'',
    email:'',
    password:'',
    error:false,
    success:false,
  })
  const {name,email,password,error,success} = value

  const handleChange=name=>event=>{
    setValue({...value, error:false, [name]:event.target.value})
  }

  const handleSubmit = e=>{
    e.preventDefault()
    setValue({...value,error:false})
    signup({name,email,password})
    .then(data=>{
      if (data.error) setValue({...value,error:data.error,  success:false})
      else setValue({...value,name:'',email:'',password:'', success:true})
    })
  }
  //to show error msg
  const showError=()=>{
     <div className="alert alert-danger" role='alert' style={{display:error?'':'none'}}> sdfa{error}</div>
    }
  const showSuccess=()=>{
     return <div className="alert alert-success" role='alert' style={{display:success?'':'none'}} >
      you have success fully created your accournt now all you have to do is verify your user account by the link we send you to your email and happy shopping and thanks for choosing us  
    </div>
      
    
  }
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                
            <form>
    {showError()}
                {showSuccess()}
              <div className="col-12 mb-3">
                <label htmlFor="fullName">FullName</label>
                <input
                  type="text"
                  name="fname"
                  id="fullName"
                  placeholder="FullName"
                  className="form-control"
                  onChange={handleChange('name')}
                  value={name}
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="form-control"
                  onChange={handleChange('email')}
                  value={email}
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="***********"
                  className="form-control"
                  onChange={handleChange('password')}
                  value={password}
                />
              </div>
              <div className="col-6">
                <button className="btn btn-primary form-control" onClick={handleSubmit}>Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
