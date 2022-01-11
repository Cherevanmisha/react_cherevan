import React from 'react';

const Post = (props) => {
    let {id,userId,title,body} = props;

    return (
        <div>
            {id}--{userId}--{title}--{body}
        </div>
    );
};

export default Post;