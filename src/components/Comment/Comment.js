import React from 'react';

const Comment = (props) => {
    let {id,name,postId,email,body} = props;

    return (
        <div>
            {id}--{name}--{postId}--{email}--{body}
        </div>
    );
};

export default Comment;