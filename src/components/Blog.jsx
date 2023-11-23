import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import {SelectSearchInput, setBlogFact} from '../features/userSlice'
import '../styling/blog.css'
function Blog() {
    const searchInput = useSelector(SelectSearchInput)
    const blog_URL = `https://gnews.io/api/v4/search?q=${searchInput}&lang=en&country=us&max=10&apikey=da7fed2084ebb54a8a0868c151980f1a`
    const dispatch = useDispatch();
    const [blog,setBlog] = useState(true);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get(blog_URL)
        .then((response)=>
        {
            dispatch(setBlogFact(response.data));
            setBlog(response.data);
            setLoading(false);
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[searchInput]);
   return (
    <div className='blog'>
        <h1 className='bolgHeader' style={{textAlign:"center"}}>Blogs</h1>
        {loading ? <h1 className='loading'>Loading..</h1> : ""}
        <div className='blogs'>
            {blog?.articles?.map((blog)=>(
                <div className='blogPost'>
                <a className='link' target='_blank' href={blog.url}>
                    <img src={blog.image}  style={{width:"300px",height:"350px"}} alt="No image" />   
                     <div>
        <h3 className='sourceName'> <span>{blog.source.name}</span><p>{blog.publishedAt}</p></h3>
        <h1 className='discrible'>{blog.title}</h1>
        <p className='discrible'>{blog.discription}</p>
        </div>
    </a> </div>))}
    {blog?.totalArticles === 0 && (
        <h1 className='noBlog'> No blogs available . search something else to read blog on the greatest plotform</h1>
    )}
  </div>
  </div>
   );
    };
export default Blog