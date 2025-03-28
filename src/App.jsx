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

      <div className="section text-center mt-3">
        {
          films.map((film, index) => (
            <div key={index}>
              <h1>{film.title}</h1>
            </div>
          ))
        }

        <div className="my-3">

          <label htmlFor="" className="form-label">Find Title</label>
          <input
            type="text"
            className="form-control"
            name=""
            id=""
            placeholder=""
            aria-describedby="fileHelpId"
          />

        </div>


      </div>

    </>



  )

}
