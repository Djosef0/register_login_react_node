import React from 'react'
import "./register.css"

export default function Register() {
    
  return (
    <div>
        <h1>sign up</h1>
        <form>
           <label>user name</label> <input type="text"/>
           <label>email</label> <input type="text"/>
           <label>password</label><input type="text"/>
            <input type="button" value="sign up"/>

        </form>
    </div>
  )
}
