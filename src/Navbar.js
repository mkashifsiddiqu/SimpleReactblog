import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>DJ-blog</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;