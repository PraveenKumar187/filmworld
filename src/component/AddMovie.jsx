import {useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Addmovie = () => {
  
let Navigate=useNavigate();
let movie_name=useRef();
let hero=useRef();
let heroine= useRef();
let director =useRef();
let genre =useRef();
let poster=useRef();
let trailer=useRef();
let releasedate=useRef();
let language =useRef();
let rating=useRef();
let synopsis=useRef();


 let  addmovie =(e)=>{
e.preventDefault();

let details ={
  movie_name:movie_name.current.value,
  hero:hero.current.value,
  heroine:heroine.current.value,
  director:director.current.value,
  genre:genre.current.value,
  poster:poster.current.value,
  trailer:trailer.current.value,
  releasedate:releasedate.current.value,
  language:language.current.value,
  rating:rating.current.value,
  synopsis:synopsis.current.value
}
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(details)

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/insert", requestOptions)
  .then(response => response.json())
  .then(result => { alert("movies added")
  Navigate("/film");})
  .catch(error => console.log('error', error));
  
}


    return ( <div className="inputes">
         <form onSubmit={addmovie}>
           <input type="text" placeholder="movie name" ref={movie_name} />
           <input type="text" placeholder="hero name" ref={hero} />
           <input type="text" placeholder="heroine name" ref={heroine} />
           <input type="text" placeholder="director name" ref={director} />
           <input type="text" placeholder="genre" ref={genre} />
           <input type="url" name="" id="" placeholder="poster url" ref={poster} />
           <input type="url" name="" id="" placeholder="trailer url" ref={trailer} />
           <input type="text" placeholder="release date" ref={releasedate} />
           <input type="text" placeholder="language " ref={language} />
           <input type="number" step={0.1} placeholder="rating" ref={rating} />
            <textarea name="" id="" cols="20" rows="6" ref={synopsis}></textarea>
             <br />
              <button type="submit">submit</button>
         </form>

 
    </div> );
}
 
export default Addmovie;

// "movie_name": "hey ram",
//         "hero": "kamal",
//         "heroine": "rani mukerji",
//         "director": "kamal",
//         "genre": "crime , drama ,history",
//         "poster": "https://pbs.twimg.com/media/ELDLxNvUwAAoE1r.jpg:large",
//         "trailer": "https://youtu.be/GKLvKk_uXzA",
//         "releasedate": "2000",
//         "language": "tamil",
//         "rating": 9.2,
//         "synopsis": "Saketh Ram's wife is raped and killed during direct action day riots in Calcutta. He is convinced that Mahatma Gandhi is responsible for all the problems happening in the country and sets out to kill him."
//     }