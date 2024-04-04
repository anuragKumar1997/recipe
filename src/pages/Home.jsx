import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [search, setsearch] = useState("cookies");
  const [value, setvalue] = useState([]);
  console.log(search)
   async function fetchRecipe(){
 let  res =await fetch(`https://api.edamam.com/search?q=${search}&app_id=9bb78f58&app_key=8120a063584a656ba5af0e75ef2bf553`)
   
let data =await res.json()
// console.log(data.hits[0,1].recipe.label)
setvalue(data.hits)

}

useEffect (()=>{
  fetchRecipe()
},[search])
console.log(value)

let searchref=useRef()
const handleSearch =(e)=>{
e.preventDefault()
// koi bhi variable bna lo kisi bhi nam ka usmai current value ko store kr do es tarike se

let SearchValue=searchref.current.value
setsearch(SearchValue)
console.log(SearchValue)
}

  return (
    <>
     <form className="d-flex m-auto w-50 p-3 mt-3 mb-3" role="search">
  <input ref={searchref} className="form-control me-2" type="search" placeholder="Search Recipe here..." aria-label="Search" />
  <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
</form>

    <div className="row row-cols-3 bg-info mt-4" style={{justifyContent:"center",paddingTop:"20px",gap:"20px"}} >

  {value.map((obj)=>{
    return <div  className="card" style={{width: '22rem',borderRadius:"40px"}}> <div className="container "> 
    <img style={{borderRadius:"50%"}} src ={obj.recipe.image}  className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title">{obj.recipe.label}</h5>
   
    <Link to="/Recipe" state={obj} style={{borderRadius:"40px"}} className="btn btn-danger " type="submit">view recipe</Link></div>
  </div>

  </div>
    
    
  
 

  })}

   
  </div>
  </>
  )
}

export default Home
