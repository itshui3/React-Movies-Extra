import React from 'react';
import styled from 'styled-components';

export default MovieDetails;

const AbsoluteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

function MovieDetails({ movie, save }) {
  console.log(movie);

  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
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

      {
        save
          ? <AbsoluteButton onClick={(e) => save(movie, e)}>Save Movie</AbsoluteButton> 
          : null
      }


      }

    </div>
  );
}

export function navigateToById(obj, hist) {
  hist.push(`/movies/${obj.id}`)
}
