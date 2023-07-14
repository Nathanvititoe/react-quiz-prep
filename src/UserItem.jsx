const UserItem = ({user}) => {
    //eventHandler
    const handleClick = (e) => {
        console.log(e.currentTarget.id); //add ID
    }
    return (
        //div w onClick
        <div onClick={handleClick} id={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
        //h1 w user.name
        //p w user.email
    )
}
export default UserItem