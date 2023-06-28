import React from 'react';
import {Container, Row,Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
const Movies = () => {
    let Navigate =useNavigate();
    return ( 
       <div>
        <div id='frontimg'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      
       </div>
        <div id='header'> <h1 >Free Movies & TV <br />
Fewer Ads than Cable <br />
No Subscription Required</h1>
<h6>Thousands of movies and TV shows. Always Free. 100% Legal.</h6>
<button onClick={()=>{Navigate("/film")}}> START WATCHING..</button>
</div>


       </div>
     );
}
 
export default Movies;