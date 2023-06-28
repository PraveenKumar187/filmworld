import { Link } from "react-router-dom";

const Filmlist = ({value,title}) => {
    return ( 
        <div id="title">
            <h3>{title}</h3>
            <div className="filmslist">

{ value && value.map((v)=>{ return ( 
     <Link to={`/detail/${v.id}`}><div id="list">
        
     <button>{v.rating}</button>
      <img src={v.poster} height={180} width={160} alt="no image" />
      <h6>{v.movie_name}</h6>
      <h6>{v.releasedate}</h6>
</div></Link>
       
    ) 
    })
    
  }


        </div>
        </div>
     );
}
 
export default Filmlist;