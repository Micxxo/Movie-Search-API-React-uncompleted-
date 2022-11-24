import './App.css';
// import MyButton from './MyButton';
// import Navbar from './Navbar';
import {Helmet} from 'react-helmet';
import { getMovieList,getMovieRec, searchMovie} from "./api"
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const App = () => {

  const [popularMovies, setPopularMovies] = useState([])
  const [getMovieRec, setRecomenMovie] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  // useEffect(() => {
  //   getMovieRec().then((result) => {
  //     setRecomenMovie(result)
  //   })
  // }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
              <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path} `}></img>
              <div className="Movie-title">{movie.title}</div>
              <div className="Movie-date">
                <h1>Date</h1> {movie.release_date}
                </div>
              <div className="Movie-rating">{movie.vote_average}</div>
            </div>
      )
    })
  }

  // const RecomendationList = () => {
  //   return getMovieRec.map((recomen, i) => {
  //    return (
  //     <div className="Movie-wrapper" key={i}>
  //             <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${recomen.poster_path} `}></img>
  //             <div className="Movie-title">{recomen.title}</div>
  //             <div className="Movie-date">
  //               <h1>Date</h1> {recomen.release_date}
  //               </div>
  //             <div className="Movie-rating">{recomen.vote_average}</div>
  //     </div>
  //    )
  //   }
  // )}

  const search = async(q) => {
    if (q.length > 3 ) {
      const query = await searchMovie(q)
      setPopularMovies(query)
    }
  }

  return (
    <div className="App">
      <div>
        <Helmet>
          <title>Micx Movies</title>
        </Helmet>
      </div>
      <header className="App-header">
      <div className="nav-wrap">
        <h1 className='nav-h1'>Micx Movies</h1>
        <input 
            type="text" 
            placeholder='Cari film' 
            className='Movie-search'
            onChange={({target}) => search(target.value)}/>
          <Navbar/>
        </div>
          <div className="container">
          <div className="Movie-container">
            <h1 className='pop-title'>Popular Movies</h1>
            <div className="movie">
              <PopularMovieList/>
            </div>
          </div>
          </div>
          
          {/* <RecomendationList/> */}
          {/* <div className="movieRec">
            <div className="rec-wrap">

            </div>
          </div> */}
      </header>
    </div>
  );
}

export default App;
