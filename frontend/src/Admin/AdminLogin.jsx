import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./admin.css"

function AdminLogin() {
    const [username,setusername]=useState("")
    const [password,setPassword]=useState("")
const navigate=useNavigate()
    const LoginAmin= async()=>{
if (username===""||password==="") {
    alert("fill the blanks")
}
else{
    const bodyjson={
        username:username,
        password:password
    }
    axios.post("https://internshipbackend-vwja.onrender.com/api/admin/adminLogin",bodyjson).then((res)=>{
        console.log(res,"data is send")
        alert("success")
        navigate("/adminepanel")
    }).catch((err)=>{
        console.log(err)
    })
}
    }
  return (
    <div>
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text"  value={username} onChange={(e)=>setusername(e.target.value)} id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="pass" class="leading-7 text-sm text-gray-600">Password</label>
            <input type="pass" id="pass" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
      <button onClick={LoginAmin} className='bt3'>Login</button>
      </div> 
    </div>
  </div>
</section>
    </div>
  )
}

export default AdminLogin
