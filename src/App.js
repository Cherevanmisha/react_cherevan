import React, {useState} from 'react';
import Users from "./component/Users/Users";
import UserDatails from "./component/UserDetails/UserDatails";
import Posts from "./component/Posts/Posts";
import {postService} from "./services/post.service";

const App = () => {

    const [user, setUser] = useState(null);

    const [posts, setPosts] = useState([]);


 const getUser = (user) => {
     setUser(user);
     setPosts([])
 }

 const getUserId=(id)=>{
     postService.getByUserId(id).then(value => setPosts([...value]))
 }

    return (
        <div>
            <div style={{display:"flex"}}>
                <Users getUser={getUser}/>
                {user && <UserDatails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}

        </div>
    );
};

export default App;