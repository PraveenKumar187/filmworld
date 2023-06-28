import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Relevant from "./Relevant";

const Filedetails = () => {
  let Navigate= useNavigate();
   let {id} =useParams();
   let [value1,setvalue1]=useState(null);


   let deletebyid=()=>{
    
   var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch(`http://localhost:8080/delete/${id}`, requestOptions)
    .then(response => response.json())
     .then(()=>{alert("deleted");
       Navigate("/film")})
    .catch(error => console.log('error', error));


   }

   var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  useEffect(()=>{setTimeout(()=>{
   
      
      fetch(`http://localhost:8080/getbyid?id=${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {setvalue1(result)})
        .catch(error => console.log('error', error));
  },1000)},[])
  


    return ( <div>

       {/* {
         value1 && value1.map((v)=>{ return ( <div>
            <img src={v.poster} height={300} width={240} alt="" />
            
         </div>)})
       } */}


 { value1 && <div>  <img src={value1.poster} height={300} width={240} alt="" />

                    <div id="detailbutton"> <button>premium</button> <button>U/A</button> <button> {value1.rating}/10</button> <button>{value1.language}</button> </div>               
                     <div id="detailshead">  <h1>{value1.movie_name}</h1> 
                       <h3>hero :{value1.hero} -- director :{value1.director}</h3>           
                      <h3>{value1.releasedate}</h3> <h3>{value1.genre}</h3> </div>
                       <div id="detailsyno"> <h6>{value1.synopsis}</h6></div>               
                              <iframe src={value1.trailer} frameborder="0"></iframe>  

                       <div id="u_dbutton"> <Link to={`/update/${value1.id}`}><button>update</button></Link> <button onClick={deletebyid}>delete</button> </div>  
                           </div>}

                        <hr />


{ value1 && <Relevant lang={value1.language}/>}



        
    </div> );




}
 
export default Filedetails;