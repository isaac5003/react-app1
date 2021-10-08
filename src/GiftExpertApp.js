import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
    //const categories = ['Scott', 'Luny', 'Champi', 'Killer'];
    const [categories, setCategories] = useState(['batman']);
    /* const handleAdd = () => {
        setCategories(['Hola', ...categories]);
    }; */
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />


            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
