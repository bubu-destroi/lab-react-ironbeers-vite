import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function AllBeersPage() {
    const [allBeers, setAllBeers] = useState([])

    const getAllBeers = async () =>{
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setAllBeers(response.data)
            
        } catch (error) {
            console.log('error fetching all beers data', error)
        }
    }

    useEffect(()=>{
        getAllBeers()
    },[])

    return(
    <>
    <div>

    {allBeers.map(beer =>{
        return(
            <div key= {beer._id } >
           <Link to={`/beers/${beer._id}`} > 
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1qg_ubZSaiosxLvS2rmQhXBru35Cp_kRmA&s'  />
            <h2>{beer.name}</h2>
            </Link> 
            <br/>
            <p>{beer.tagline}</p>
            <br/>
            <p><b>{beer.contributed_by}</b></p>

            </div>
        )
    })}

    </div>


    </>
    )

}

export default AllBeersPage;
