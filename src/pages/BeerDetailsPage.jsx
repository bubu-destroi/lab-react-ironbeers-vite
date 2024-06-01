import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BeerDetailsPage() {

    const [beer, setBeer] = useState(null)
    const navigate = useNavigate()
    const {beerId} = useParams()

    const getSingleBeer = async id => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setBeer(response.data)
            
        } catch (error) {
            console.log('error fetching details', error)
            
        }
    }

    useEffect(()=>{
        getSingleBeer(beerId)
    },[beerId])

    return(
        <div>
        {!beer && <h3>No beer was found</h3>}
        {beer && (
            <div >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1qg_ubZSaiosxLvS2rmQhXBru35Cp_kRmA&s'  />
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p>{beer.first_brewed}</p>
                <p>{beer.atenuation_level}</p>
                <h3>{beer.description}</h3>
                <h5>{beer.contributed_by}</h5>

            </div>
            )
        }
        
        </div>
    )


}

export default BeerDetailsPage;
