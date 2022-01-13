import { API } from "../config";


// for signin
export const  signup = (user)=>{
    return (
        fetch(`${API}/register`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .catch(err=> console.log(err)))
}

export const signin = user =>{
    return (
        fetch(`${API}/signin`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .catch(err=> console.log(err))
    )
}
export const authenticate =(data,next)=>{
    if (typeof window !== undefined){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
} 

export const isAuthenticated = () =>{
    if(typeof window === undefined){
        return false
    }
    if (localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }   
}

export const signout =(next)=>{
    if (typeof window !== undefined){
        localStorage.removeItem('jwt',JSON.stringify('jwt'))
        next()
            fetch(`${API}/signout`,{
                method:'POST'
            
            })
            .then(res=> console.log('signout',res))
            .catch(err=>console.log(err))
    }
}

