import React from 'react';

const Post = ({post: {id, title}, getPost}) => {

    return (
        <div>
            {id}--{title}
            <button onClick={() => getPost(id)}>getPost</button>
        </div>
    );
};

export default Post;