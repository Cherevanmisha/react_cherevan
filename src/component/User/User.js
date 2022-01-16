
const User = ({user,getUser}) => {
    const {id, name} = user;
    return (
        <div style={{display:"flex"}}>
            <div>{id} {name}</div>
            <button onClick={()=>getUser(user)}>UserDetails</button>
        </div>
    );
};

export default User;