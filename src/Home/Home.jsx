import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    // console.log(cards)

    return (
        <div >
            <h2 className="text-4xl font-bold">Welcome to <span className="text-red-400 text-4xl">Data</span> Bootcamp!!!</h2>
            <div className="flex justify-center gap-3 m-3">
                <Link to={'/courses'}>Courses</Link>
                <Link to={'/users'}>Users</Link>
            </div>
            <div>
                <h2>Albums</h2>
                <div className="grid lg:grid-cols-3 gap-3">
                    {
                        cards.map(card => <Card
                            key={card.id}
                            card={card}></Card>)
                    }
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;