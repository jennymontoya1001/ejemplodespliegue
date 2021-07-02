import React, { useState, useEffect } from 'react';

const Characters = () => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = async () => {
        const url = 'https://rickandmortyapi.com/api/character/';
        const res = await fetch(url);
        const data = await res.json();
        const { results } = data;
     

        const characters = results.map(char => {
            return {
                id: char.id,
                name: char.name,
                image: char.image,
                status: char.status,
                gender: char.gender,
                origin: char.origin.name
            }

        })
        setCharacter(characters);
    }




    return (
        <>
            <h1>Characters Rick and Morty</h1>
            {
                character.map(char => (
                    <div className="card" key={char.id}>
                        <img src={char.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{char.name}</p>
                            <p className="card-text">{char.status}</p>
                            <p className="card-text">{char.gender}</p>
                            <p className="card-text">{char.origin}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )

}


export default Characters;