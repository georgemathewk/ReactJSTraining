import React from 'react';
import './Banner.css';
import { THEMOVIEDB_IMAGE_BASEURL } from '../../constants/constants';

function Banner({ movie }) {
    return (
        <header className="banner" style={{
            backgroundImage: `url(
                "${THEMOVIEDB_IMAGE_BASEURL}${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;
