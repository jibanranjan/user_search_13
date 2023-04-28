import { useEffect,useState } from 'react'
import './Card.css'
export default function Card() {
   
    const[users,setUsers]=useState([])
    const[name,setName]=useState("")
    const[filterUsers,setFilterUsers]=useState([]);
    const[filterUsersByName,setFilterUsersByName]=useState([])

   const fetchApi=()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setUsers(data)
       setFilterUsers(data)
       setFilterUsersByName(data)

    })
   }

   const searchName=()=>{
    
    setFilterUsersByName(filterUsers.filter((user)=>{
     return user.category.substring(0,name.length)===name
    }))

    
   }
 useEffect(()=>{
  fetchApi()
 })








  return (
    <div className="mainContainer">

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <div className="result">

      { filterUsersByName.map((ele)=>{
       return(
  <div className="card">
  <img src={ele.image} alt="" />
  <p>{ele.title}</p>
  <p>{ele.price}</p>
  <button>View Product</button>
  </div>
  ) 

      })

     
       

       
}    
        </div>

    </div>
  )
}
