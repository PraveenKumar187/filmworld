import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav id="nav">
            <Link to={"/"}><div id="logo"> . Spk  . </div></Link>
           <Link to={"film"}> <div>HOME</div></Link>
           <Link to={"/add"}><div>ADD MOVIE</div></Link>
            <Link to={"/lang"}><div>LANGUAGE</div></Link>
            <Link to={"/sub"}><div>SUBSCRIPTION</div></Link>
           
        </nav>
     );
}
 
export default Nav;