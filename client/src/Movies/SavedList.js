import React from 'react';
import { navigateToById } from './MovieDetails';

const SavedList = props => {

  console.log(props);

return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.savedList.map((movie, i) => (
      <span key={i} className="saved-movie" onClick={() => navigateToById(movie, props.history)}>{movie.title}</span>
    ))}
    <div className="home-button" onClick={() => returnHome(props)}>Home</div>
  </div>
)};

export default SavedList;

function returnHome(props) {
  props.history.push("/");
}
