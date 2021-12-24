import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="Not-Found">
           <h2>Sorry</h2>
           <p>Not Found Blog Error- 404</p>
           <Link to={'/'}>Go-To Home Page</Link>
        </div>
    );
}
 
export default NotFound;