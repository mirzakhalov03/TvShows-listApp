import React from 'react'
import "./card.scss"

const Card = ({image, name, description, premiered, rating, genres, url}) => {
  return (
    <>
        <div className='card' >
            <div className="card__img">
                <img src={image} alt="" />
            </div>
            <div className="card__content">
                <div className="info">
                    <h2>{name}</h2>
                    <div className="description">
                    <p>{description}</p>
                    </div>
                    <br />
                    <div className="details">
                        <p>Aired: <span>{premiered}</span></p>
                        <p>Country: <span></span></p>
                        <p>Average Rating: <span>{rating}</span></p>
                        <p>Genres: <span>{genres}</span></p>
                    </div>
                </div>
                <a href={url} className='watch'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                </svg>
                     Watch
                </a>
            </div>
        </div>
    </>
  )
}

export default Card