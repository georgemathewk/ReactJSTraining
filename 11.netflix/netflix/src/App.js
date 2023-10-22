import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Posters from './components/Posters/Posters';
import { THEMOVIEDB_API_KEY, THEMOVIEDB_IMAGE_BASEURL } from  './constants/constants';
import axiosInstance from './connections/axios';
import React from 'react';
import YouTube from 'react-youtube';

const PosterClickHandlerContext = React.createContext();


function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [videoId, setVideoId] = useState('');

  const posterClickedHandler = (id) => { 
    console.log(id);
    async function fetchData() {
      try {
        const response = await axiosInstance.get(`3/movie/${id}?api_key=${THEMOVIEDB_API_KEY}&append_to_response=videos`);
        setMovie(response.data);
        if (response.data.videos.results.length > 0) {
          setVideoId(response.data.videos.results[0].key);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }


  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axiosInstance.get( "3/trending/movie/day?api_key="+ THEMOVIEDB_API_KEY + "&language=en-US");
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);  
            setMovies(response.data.results);      
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, []);

  
  return (
    <div className="App">
      <NavBar />
      <Banner movie={movie} /> 
      <PosterClickHandlerContext.Provider value={posterClickedHandler}>
        <Posters posters={movies}/>
        <YouTube 
          videoId={videoId} 
          opts={
                {
                  height: '390', 
                  width: '100%',
                  playerVars: {
                    autoplay: 1
                  }
                }
              }      
          
        />
      </PosterClickHandlerContext.Provider>
      
    </div>
  );
}

export default App;
export { PosterClickHandlerContext };
