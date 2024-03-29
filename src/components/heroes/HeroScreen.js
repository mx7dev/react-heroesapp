import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const { heroeid } = useParams();

    const hero =  useMemo(() =>  getHeroById(heroeid), [heroeid])

    

    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn =()=>{
        history.goBack();
    }

    const {
        publisher,
        alter_ego,
        first_appearance,
        characters, superhero } = hero;

        
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeid}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />

            </div>
            <div className="col-8">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"><b>First appareance: </b> {first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>
    )
}