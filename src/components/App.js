import React from 'react'; 
import ReactDOM from 'react-dom/client';


 import {data} from "../data";
import index from "../index.css"
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { addMovies } from '../actions';


class App extends React.Component {
componentDidMount(){

  const {store}=this.props;
  store.subscribe(()=>{
     console.log('UPDATED');
     this.forceUpdate();
  });
  //make api call
  //dispatch the action
  store.dispatch(addMovies(data));
  console.log('STATE',this.props.store.getState());
}
  render(){

  const {list} = this.props.store.getState();
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
          {list.map((movie,index)=>(
            <MovieCard movie={movie} key={'movies-${index}'}/>
          ))}
        </div>
      </div>
    </div>
  );
          }
}

export default App;
