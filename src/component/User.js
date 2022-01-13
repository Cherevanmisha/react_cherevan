const User = ({user: {id, name}, getUserId}) => {
    return (
        <div>

            {id}--{name}

            <button onClick={() => getUserId(id)}>userDetails</button>
        </div>
    );
};

export default User;