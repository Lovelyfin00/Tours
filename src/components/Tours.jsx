import { useEffect, useState } from "react";

import Card from "./Card";

const url = 'https://course-api.com/react-tours-project';

const Tours = () => {

    const [fetchTours, setFetchTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const toursData = async () =>{
        try{
            const data = await fetch(url);
            const response = await data.json();
            setFetchTours(response);

            setIsLoading(false);

        } catch(error) {
            setIsLoading(false);
            console.error(`Error fetching data with ${error}`);
        }
    }

    useEffect(() => { 
        toursData();  
    }, []);

    if(isLoading) {
        return <div className="loading"></div>
    }

    const removeCard = (id) => {
        const tourRemoved = fetchTours.filter((tour) => {
            return tour.id !== id;
        })
        setFetchTours(tourRemoved);
    }

if (fetchTours.length === 0) {
    return (
        <main>
        <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => toursData()}>
                refresh
            </button>
        </div>
        </main>
    );
}

  return (
    <main>
        <section className="">
        <div className="title">
            <h2>Our Tours</h2>
            <div className="title-underline"></div>
        </div>
        <div className="tours">
            {
                fetchTours.map((tour)=> {
                    return <Card {...tour} key={tour.id} removeCard={removeCard} />
                })
            }
        </div>
        </section>
    </main>
  )
}
export default Tours;