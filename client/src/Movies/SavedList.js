import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import './movies.css';


const SavedList = props => {

return (
  <div className="saved-list">
    <div>
      <h3>Saved Movies:</h3>
      <div className="home-button" onClick={() => returnHome(props)}>Home</div>
    </div>
    <div>
    {props.savedList.map((movie, i) => (
      <NavLink activeClassName="focusSaved" key={i} className="saved-movie" to={`/saved/${movie.id}`}>{movie.title}</NavLink>
    ))}
    </div>

  </div>
)};

export default SavedList;

function returnHome(props) {
  props.history.push("/");
}

