import { useNavigate } from "react-router-dom";


const User = ({ user }) => {
    // console.log(user)
    const { id, name, username, email, address } = user;
    // console.log(address)
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/user/${id}`);
        // console.log('clicked 1')
    }
    return (
        <div>
            <div className="border-red-400 rounded-md border-2 p-3">
                <p className="font-bold">{name}</p>
                <p>User ID: {id}</p>
                <p>Username: {username}</p>
                <button onClick={handleShowDetails} className="bg-purple-600 text-white">Details</button>
            </div>
        </div>
    );
};

export default User;