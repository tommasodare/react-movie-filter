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
  const [searchText, setSearchText] = useState('')

  const filteredFilms = films.filter(film =>
    film.genre.toLowerCase().includes(searchText.toLowerCase())
  )

  const filteredMovies = films.filter(film =>
    film.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (

    <>

      <div className="section text-center mt-3">
        <h1>Titles</h1>
        {
          filteredFilms.map((film, index) => (
            <div key={index}>
              <h3>{film.title}</h3>
              <span>{film.genre}</span>
            </div>
          ))
        }

        <div className="my-3">

          <label htmlFor="" className="form-label">Find Title</label>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Text Title Here"
            aria-describedby="fileHelpId"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />

        </div>


      </div>

    </>



  )

}
