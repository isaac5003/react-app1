import React from 'react';
//import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGift';
import { useFetchGift } from '../hooks/useFetchGift';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    //const [count, setCount] = useState(0)
    //const [Images, setImages] = useState([]);

    const { data: images, loading } = useFetchGift(category);

    //Se ejecuta una vez cuando el componente se renderiza
    /*  useEffect(() => {
         getGifs(category)
             .then(setImages);
     }, [category]); */


    //getGifs();
    return (
        <div className="card-grid">
            <h3 className="animate__jackInTheBox">{category}</h3>
            {loading && <p className="animate__animated animate__fadeIn">Loading....</p>}

            {/* {
                Images.map(img => (
                    <GiftGridItem key={img.id} {...img} />
                ))
            } */}

            {
                images.map(img => (
                    <GiftGridItem key={img.id} {...img} />
                ))
            }
        </div>
    )
}
