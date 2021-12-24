import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,isPrending,error}=useFetch('http://localhost:8080/blogs')
    return (
        <div className="home">
            { error && <div>{error}</div>}
            {blogs &&<BlogList blogs={blogs} title={"All Blog"} />}
            {isPrending && <div>Loading....</div>}
        </div>
        
    );
}

export default Home;