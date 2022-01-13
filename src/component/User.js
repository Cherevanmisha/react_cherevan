const User = ({user: {id, name}, getUserId}) => {
    return (
        <div>
            {id}--{name}
            <button onClick={() => getUserId(id)}>GetDetails</button>


        </div>
    );
};

export default User;