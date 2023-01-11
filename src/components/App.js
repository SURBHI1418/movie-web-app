import React from 'react'; 
import ReactDOM from 'react-dom/client';

 import {data} from "../data";
import index from "../index.css"
import Navbar from './Navbar';
import MovieCard from "./MovieCard";


class App extends React.Component {
componentDidMount(){

  const {store}=this.props;
  store.subscribe(()=>{
     console.log('UPDATED');
     this.forceUpdate();
  });
  //make api call
  //dispatch the action
  store.dispatch({
    type: 'ADD_MOVIE', 
    movies: data
  });
  console.log('STATE',this.props.store.getState());
}
  render(){

  const movies=this.props.store.getState();
  console.log('RENDER');
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourite</div>
        </div>
        <div className="list">
          {movies.map((movie,index)=>(
            <MovieCard movie={movie} key={'movies-${index}'}/>
          ))}
        </div>
      </div>
    </div>
  );
          }
}

export default App;
