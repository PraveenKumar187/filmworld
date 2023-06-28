import { useEffect, useRef} from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
 let Navigate=useNavigate();
  let id=useRef();
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

    let {userid} =useParams();
   
   var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  useEffect(()=>{setTimeout(()=>{
   
      
      fetch(`http://localhost:8080/getbyid?id=${userid}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          id.current.value=data.id;
          movie_name.current.value=data.movie_name;
                  hero.current.value=data.hero;
                  heroine.current.value=data.heroine;
                  director.current.value=data.director;
                  genre.current.value=data.genre;
                  poster.current.value=data.poster;
                  trailer.current.value=data.trailer;
                  releasedate.current.value=data.releasedate;
                  language.current.value=data.language;
                  rating.current.value=data.rating;
                  synopsis.current.value=data.synopsis })
  },1000)},[])
  


let handleupdate=(e)=>{
   e.preventDefault();
let editdetail={
   id:id.current.value,
  movie_name:movie_name.current.value,
  hero: hero.current.value,
  heroine:  heroine.current.value,
  director: director.current.value,
  genre:  genre.current.value,
  poster: poster.current.value,
  trailer: trailer.current.value,
  releasedate:releasedate.current.value,
  language:language.current.value,
  rating: rating.current.value,
  synopsis: synopsis.current.value

}


   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   
   var raw = JSON.stringify(editdetail)
   
       var requestOptions = {
           method: 'PUT',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };
         
         fetch("http://localhost:8080/updateall", requestOptions)
         .then(response => response.json())
        .then(()=>{alert("value updated successfully")
        Navigate("/film") })
         .catch(error => console.log('error', error));
}





    
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   useEffect(()=>{setInterval(()=>{
//       fetch("http://localhost:8080/getallfilm", requestOptions)
//     .then(response => response.json())
//     .then(data => {
//         movie_name.current.value=data.movie_name;
//         hero.current.value=data.hero;
//         heroine.current.value=data.heroine;
//         director.current.value=data.director;
//         genre.current.value=data.genre;
//         poster.current.value=data.poster;
//         trailer.current.value=data.trailer;
//         releasedate.current.value=data.releasedate;
//         language.current.value=data.language;
//         rating.current.value=data.rating;
//         synopsis.current.value=data.synopsis          })
    
  
//   },1000)},[])



    return ( <div id="updateinput">
         <form onSubmit={handleupdate} >
          <input type="number" placeholder="id" ref={id} />
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
 
export default Update;