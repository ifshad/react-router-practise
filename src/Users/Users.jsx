import { useLoaderData, useNavigate } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();
    const navigate = useNavigate();
    // console.log(users)
    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <div>
            <h4 className="text-3xl font-semibold">Total Users: {users.length}</h4>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-3">
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}></User>)
                }
            </div>
            <button onClick={handleGoBack} className="bg-red-600 text-white">Home</button>
        </div>
    );
};

export default Users;