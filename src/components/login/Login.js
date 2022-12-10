import React ,{useState} from 'react'
import "./login.css"

const Login = () => {

const [username , setUserName]= useState('')
const [password , setPassword]= useState('')
const [msg , setMsg] = useState('')

const user={
  username:"admin",
  password:"123"
} 


function login(){
if(username===user.username && password===user.password){
 setMsg("user Found")
}
else
{ setMsg("user name or password invalide");
  }
}

  return (
    <div className='container'>

        <h1>Login</h1>
        <form>
            <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <input type="button" value="login" className='btn' onClick={login} />
            <input type="submit" value="register" className='btn'/>
            </form>
<p>{msg}</p>
    </div>
  )
}

export default Login