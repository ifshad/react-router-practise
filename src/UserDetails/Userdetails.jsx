import { useLoaderData, useNavigate } from "react-router-dom";


const Userdetails = () => {
    const user = useLoaderData();
    const { name, email, address } = user;
    // console.log(user)
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/');
    }
    const handlePrevious = () => {
        navigate(-1)
    }

    return (
        <div className="border-orange-400 rounded-lg border-2 p-5">
            <p className="font-bold text-xl">{name}</p>
            <p>Email: {email}</p>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
            <div className="m-4 flex justify-center gap-4">
                <button onClick={handleGoBack} className="bg-red-600 text-white ">Home</button>
                <button onClick={handlePrevious}>Previous</button>
            </div>
        </div>
    );
};

export default Userdetails;