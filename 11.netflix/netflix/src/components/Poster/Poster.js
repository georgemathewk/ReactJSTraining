import React, { useContext } from 'react';
import './Poster.css';
import { THEMOVIEDB_IMAGE_BASEURL } from  '../../constants/constants';
import { PosterClickHandlerContext } from '../../App';

function Poster(props){
    const { id, title, backdrop_path, vote_average } = props.poster;
    const posterClickedHandler = useContext(PosterClickHandlerContext);
    return (        
        <div className="Poster">
            <img src={THEMOVIEDB_IMAGE_BASEURL + backdrop_path} alt={title}
                onClick={() => {
                    posterClickedHandler(id);
                }} />
            <div className="details">
                <h3>{title}</h3>
                <p>{vote_average}</p>
            </div>
        </div>
    );
};

export default Poster;
