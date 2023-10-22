import React from 'react';
import Poster from '../Poster/Poster';
import './Posters.css';

const Posters = ({ posters }) => {
    return (
            <div className="Posters">
                {posters.map((poster) => (                    
                    <Poster key={poster.id} poster={poster} />
                ))}
            </div>
    );
};

export default Posters;
