import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieDetails from './MovieDetails';

const MovieList = props => {

  const hist = props.history;

  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} onClick={() => navigateToById(movie, hist)}>
          <MovieDetails movie={movie} save={props.save} />
        </div>
      ))}
    </div>
  );
}



function navigateToById(obj, hist) {
  hist.push(`/movies/${obj.id}`)
}

export default MovieList;
