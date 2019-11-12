import React from 'react';

const SavedList = props => {

  console.log(props);

return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.savedList.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button" onClick={() => returnHome(props)}>Home</div>
  </div>
)};

export default SavedList;

function returnHome(props) {
  props.history.push("/");

}
