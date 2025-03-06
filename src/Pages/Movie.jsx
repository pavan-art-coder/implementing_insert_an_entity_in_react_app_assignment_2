import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Movie(){
   const [title,setTitle]=useState("")
   const [director,setDirector]=useState("")
   const [genre,setGenre]=useState("")
   const[release,setRelease]=useState("")
   const[synopsis,setSynopis]=useState("")
   const[poster,setPoster]=useState("")
   const navigate=useNavigate()

 const handlesubmit=(e)=>{
    e.preventDefault()
    alert(`Movie ${title} is added sucessfully`)
    navigate('/')
}
   return(
    <>
    <h1>Add Movie</h1>
    <form onSubmit={handlesubmit}>
    <input 
    type="text"
    placeholder="Title"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    />
     <input 
    type="text"
    placeholder="Director"
    value={director}
    onChange={(e)=>setDirector(e.target.value)}
    />
    
    <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
     <input 
    type="number"
    placeholder="Release"
    value={release}
    onChange={(e)=>setRelease(e.target.value)}
    />

     <textarea
    type="text"
    placeholder="Synopsis"
    value={synopsis}
    onChange={(e)=>setSynopis(e.target.value)}
    required
    />
     <input 
    type="url"
    placeholder="Image URL"
    value={poster}
    onChange={(e)=>setPoster(e.target.value)}
    />

   <button type="submit">Add Movie</button>
</form>
    </>
   )
}

export default Movie;







