import { useState, useEffect } from 'react'

const filmsList = [
  {
    title: 'Inception',
    genre: 'Fantascienza'
  },
  {
    title: 'Il Padrino',
    genre: 'Thriller'
  }
  ,
  {
    title: 'Titanic',
    genre: 'Romantico'
  },
  {
    title: 'Batman',
    genre: 'Azione'
  },
  {
    title: 'Interstellar',
    genre: 'Fantascienza'
  },
  {
    title: 'Pulp Fiction',
    genre: 'Thriller'
  }
]



export default function App() {

  const [films, setFilms] = useState(filmsList)

  return (

    <>

      <div className="section">
        {
          films.map((film, index) => (
            <div key={index}>
              <h1>{film.title}</h1>
            </div>
          ))
        }
      </div>


    </>



  )

}
