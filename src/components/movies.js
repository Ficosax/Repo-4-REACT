import React from "react";
import PropTypes from 'prop-types';

export const movies = ({ listaNaFilmovi }) => {
    return (
        <div id='movies'>
            <h2>Movies:</h2>
            <ol>
                {listaNaFilmovi.map((filmovi, i) => {
                    return (
                        <li key={i}>
                            <p>Name: {filmovi.name}</p>
                            <p>Release: {filmovi.date}</p>
                            <p>Genre: {filmovi.genre}</p>
                            <p>IMDbLink: {filmovi.imdbLink}</p>
                            <p>ImgUrl: {filmovi.imgUrl}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

movies.propTypes = { 
    listaNaFilmovi: PropTypes.array.isRequired 
}