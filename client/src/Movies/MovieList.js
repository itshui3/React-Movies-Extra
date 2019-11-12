import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <MovieDetails key={movie.id} movie={movie} hist={hist} />
      ))}
    </div>
  );
}

function MovieDetails({ movie, hist }) {

  console.log(window.history);
  const { title, director, metascore, stars } = movie;
  return (
    <div onClick={() => navigateToById(movie, hist)} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

function navigateToById(obj, hist) {
  hist.push(`/movies/${obj.id}`)
}

export default MovieList;
