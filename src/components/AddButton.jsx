import { useNavigate} from "react-router-dom";

function Addbutton(){
 const navigate=useNavigate()
 return(
    <>
      <button onClick={()=>navigate("/movie")}>AddButton</button>
    </>

 )
}

export default Addbutton