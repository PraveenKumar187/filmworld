import { useEffect, useState } from "react";
import Filmlist from "./Filmlist";

const Relevant = ({lang}) => {

    let[rel,setrel]=useState(null);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      useEffect(()=>{setTimeout(()=>{
          fetch("http://localhost:8080/getallfilm", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result);
       setrel(result) ;})
        .catch(error => console.log('error', error));
      
      },1000)},[])


    return ( <div>
           <h1>relevant movies </h1>

       {rel &&  <Filmlist value={rel.filter((m)=>{return m.language.includes(lang)})}/>}

    </div> );
}
 
export default Relevant;