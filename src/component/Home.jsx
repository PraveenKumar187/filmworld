import { useEffect, useState } from "react";
import Filmlist from "./Filmlist";

const Home = () => {
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


    return ( <div>

    <Filmlist value={value} title="BEST FILMS" />
     <Filmlist value={value.filter((v)=>{return v.genre.includes("drama")})} title="DRAMA" />
     <Filmlist value={value.filter((v)=>{return v.language.includes("tamil")})} title="TAMIL" />
     <Filmlist value={value.filter((v)=>{return v.genre.includes("action")})} title="ACTION" />
    </div> );

    }
export default Home;