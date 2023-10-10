import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    
    return (
        <div>
            <h1 className="font-bold">{error.status}</h1>
            <h2 className="font-semibold">Oops!!!</h2>
            <p>Sorry,an unexpected error occured!!!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;