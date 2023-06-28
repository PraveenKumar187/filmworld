import { useEffect, useState } from "react";
import Filmlist from "./Filmlist";

const Language = () => {
    let[value,setvalue]=useState([]);



var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

useEffect(()=>{setTimeout(()=>{
    fetch("http://localhost:8080/getallfilm", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);
 setvalue(result) ;})
  .catch(error => console.log('error', error));

},1000)},[])
    return ( 
        <div>
            
             <Filmlist value={value.filter((v)=>{return v.language.includes("tamil")})} title="TAMIL" />
             <Filmlist value={value.filter((v)=>{return v.language.includes("telugu")})} title="TELUGU" />
             <Filmlist value={value.filter((v)=>{return v.language.includes("hindi")})} title="HINDI" />
             <Filmlist value={value.filter((v)=>{return v.language.includes("english")})} title="ENGLISH" />
        </div>
     );
}
 
export default Language;