import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isPendding,setPending] =useState(true);
    const histroy= useHistory();
    const handlesubmit=(e)=>{
        e.preventDefault();
        const blog = {title,body,author};
        fetch('http://localhost:8080/blogs',{
        method:'POST',
        headers:{"content-type":"Application/json"},
        body:JSON.stringify(blog)
        }).then(()=>{
            setPending(false);
            histroy.push('/');
        })
    }
    return (
        <div className="create">
            <form onSubmit={(e)=>handlesubmit(e)}>
                <label>Blog Title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}

                />
                <label>Blog Body :</label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                />
                <label>Blog Author :</label>
                <select
                 value={author}
                 onChange={(e)=>{setAuthor(e.target.value)}}
                 >
                     <option>Select</option>
                    <option value="Kashif">Kashif</option>
                    <option value="Asif">Asif</option>
                   
                </select>
                {isPendding && <button >Add Blog</button>}
                {!isPendding && <button disabled>Added Successfully</button>}
            </form>
        </div>
    );
}

export default Create;