import React, { useState } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  //saved list of movies is an array of objects, this will allow MovieDetails to iterate through! 

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path="/" render={props => <SavedList {...props} savedList={savedList} />}></Route>
      <Route exact path="/" render={(props) => <MovieList {...props} save={addToSavedList} />}></Route>
      <Route path="/movies/:id" render={props => <Movie {...props} savedList={savedList} save={addToSavedList} />}></Route>
    </div>
  );
};

export default App;
