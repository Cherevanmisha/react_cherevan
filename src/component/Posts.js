import React, {useEffect, useState} from 'react';
import {userService} from "../services/services";
import User from "./User";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);


    useEffect(() => {
        userService.getAllPost()
            .then(value => setPosts(value))
    }, [])


    const getPost = (id) => {
        userService.getByIdPost(id)
            .then(value => setPost(value))
    }


    return (
        <div>

            {posts.map(value => <Post key={value.id} user={value}
                                      getPost={getPost}/>)}

            <div className='post'>

                {post && <div>{post.id} -- {post.userId} -- {post.title}-- {post.title} </div>}
            </div>
        </div>
    );
};

export default Posts;