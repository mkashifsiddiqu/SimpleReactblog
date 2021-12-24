import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
const BlogDetail = () => {
    const {id}= useParams(); 
    const { data:blog,isPrending,error}=useFetch('http://localhost:8080/blogs/'+id);
    const history = useHistory();
    const handleDelete = ()=> {
        fetch('http://localhost:8080/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        }) 
    }
    return ( 
        <div className="blog-details">
            {isPrending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Deteled</button>
                </article>
                
            )}
        </div>
    );
}
export default BlogDetail;