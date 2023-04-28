import { useState,useEffect } from 'react'
import React from 'react'
import './User.css';
import UserCard from './UserCard'
export default function User() {
const [users,setUsers]=useState([])
const [filterUsers,setFilterUsers]=useState([])
const[num,setNum]=useState("");

useEffect(()=>{
    async function getData(){
        const res= await fetch("https://api.github.com/users")
        const data=await res.json();
        setUsers(data)
        console.log(users)
        setFilterUsers(data)
        setNum('30')
    }
    getData();
},[]);
useEffect(()=>{
    const number=parseInt(num);
    if(number<0||number>users.length)return;
    const data=users.slice(0,number)
    setFilterUsers(data)
},[num])

  return (
   <div className='mainContainer'>
    <input type="text" value={num} onChange={(e)=>setNum(e.target.value)} />
    <div className='result'>
        {filterUsers.map((ele)=>{
            return(
                <UserCard key={ele.id}
                login={ele.login}
                avatar_url={ele.avatar_url}
                />
            )
        })}
        
    </div>

   </div>
  )
}
