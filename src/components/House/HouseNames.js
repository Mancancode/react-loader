import React from 'react';
import Loader from '../home/Loader'

const HouseNames = ({ items, isLoading }) => {
    return isLoading ? (   //Checkif if is loading
    <Loader/>
    ) : (
    <section className="frame"> 
    {items.map((item)  => (   //here we map through the items
        <h1>{item.name}</h1>
    ))}
    </section>
    )
    
}

export default HouseNames
 