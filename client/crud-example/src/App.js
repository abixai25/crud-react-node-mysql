import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {
  
    const [movieName, setMovieName] = useState ('');
    const [review, setReview] = useState (''); 
    const [movieReviewList, setMovieList] = useState ([]);

    
    useEffect(()=> {
      Axios.get('http://localhost:3001/api/get').then((response)=> {
        setMovieList(response.data)
      // console.log(response.data);
      });
    }, [])

    const submitReview = () => {
      Axios.post ('http://localhost:3001/api/insert',
      {movieName: movieName,
       movieReview: review
      }).then(() => {
        alert("successful insert data")
      });
    };

  return (
    <div className="App">
    <h1>CRUD APPLICATION EXAMPLE</h1>
        <form>
        <label>
        Movie Name:
        <input type="text" name="Moviename" onChange={(e)=> {
          setMovieName(e.target.value)
        }} />
        </label>
        <label>
          Review
        <input type="text" name="Review" onChange={(e)=> {
          setReview(e.target.value)
        }} />
        </label>
        <input type="submit" value="Submit" onClick={submitReview} />
        </form>

        {movieReviewList.map((val)=>{
         return <h5>MovieName: {val.movieName} | Movie Review: {val.movieReview} </h5>
        })}
  
      
    </div>
  );
}
export default App; 
