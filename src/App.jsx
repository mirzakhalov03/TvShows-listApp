import './App.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './assets/components/card/Card';
import React from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://api.tvmaze.com/shows")
      .then(product => setData(product.data))
  }, [])


  return (
    <>
    
      <div className="hero">
        <div className="container">
          <div className="hero__hug">
            <div className="header__title">
              <h1>All TV shows</h1>
            </div>
            <div className="wrapper">
              {
                data.map(film => (
                  <React.Fragment key={film.id}>
                    <Card name={film.name} image={film.image.original} description={film.summary} premiered={film.premiered} rating={film.rating.average} genres={film.genres} url={film.url}/>
                  </React.Fragment>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {
        data.map(film => (
          <div key={film.id}>
          </div>
        ))
      }
    </>
  )
}

export default App
