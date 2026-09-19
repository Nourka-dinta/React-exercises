const UserCard = ({name, email})=> {

    return(
        <>
            <h1>Hello, {name}</h1>
            <span>Your email is : {email}</span>
        </>

    )
}

export default UserCard;