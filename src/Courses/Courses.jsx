import { useLoaderData } from "react-router-dom";


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            
        </div>
    );
};

export default Courses;