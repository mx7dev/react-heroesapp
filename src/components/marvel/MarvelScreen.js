import React from 'react'
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    const publisher = "Marvel Comics";
    return (
        <div>
            <h1>Marvel Screen</h1>
            <HeroList publisher={publisher}  />
        </div>
    )
}
