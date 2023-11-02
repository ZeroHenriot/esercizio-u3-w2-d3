import { useEffect, useState } from 'react'
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'
import CommentArea from './CommentArea'

const url = 'http://www.omdbapi.com/?apikey=81846f9a&i='

const MovieDetails = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movie, setMovie] = useState([])

  console.log(params)

  const getMovie = () => {
    fetch(url + params.movieId)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`C'hai un errore, rincoglionito`)
        }
      })
      .then((data) => {
        setTimeout(() => {
          console.log(data)
          setMovie(data)
          setIsLoading(false)
        }, 650)
      })
      .catch((err) => {
        console.log('ERRORE', err)
        setIsError(true)
        setIsLoading(false)
      })
  }
  useEffect(() => {
    getMovie()
  }, [])

  if (movie.Response === 'False') {
    return <Navigate to="/NotFound" />
  }
  return (
    <>
      <Container className="h-100">
        {isLoading && (
          <div className="h-100 d-flex justify-content-center align-items-center">
            <Spinner
              animation="grow"
              variant="secondary"
              style={{ height: '100px', width: '100px' }}
            />
          </div>
        )}
        {isError && (
          <div className="text-center px-2">
            <Alert variant="danger">Bravo cojone, mo risolvi i tuoi bug</Alert>
          </div>
        )}
        {!isLoading && !isError && movie && (
          <Row className="justify-content-center">
            <Col xs={6} md={4} className="px-0">
              <Card className="h-100 border-0 bg-primary">
                <Card.Img
                  variant="top"
                  src={movie.Poster}
                  alt={movie.Title}
                  className="h-75 h-md-100 rounded-0"
                />
              </Card>
            </Col>
            <Col xs={4} md={6} className="px-0">
              <Card className="h-100 border-0 bg-success rounded-0 text-white px-2 py-1">
                <Card.Text className="fs-5">{movie.Title}</Card.Text>
                <Card.Text>
                  <span className="text-white fw-bold">Actors: </span>
                  {movie.Actors}
                </Card.Text>
                <Card.Text>
                  <span className="text-white fw-bold">Awards: </span>
                  {movie.Awards}
                </Card.Text>
                <Card.Text>
                  <span className="text-white fw-bold">Director: </span>
                  {movie.Director}
                </Card.Text>
                <Card.Text>
                  <span className="text-white fw-bold">Plot: </span>
                  {movie.Plot}
                </Card.Text>
                <Card.Text>
                  <span className="text-white fw-bold">Released: </span>
                  {movie.Released}
                </Card.Text>
                <Card.Text>
                  <span className="text-white fw-bold">Runtime: </span>
                  {movie.Runtime}
                </Card.Text>
                <Card.Text>
                  <span className="text-white fw-bold">Genre: </span>
                  {movie.Genre}
                </Card.Text>
                <div className="d-flex flex-column h-100 justify-content-end">
                  <div className="d-flex justify-content-between">
                    <Card.Text>{movie.Country}</Card.Text>
                    <Card.Text>{movie.Language}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Card.Text>{movie.Writer}</Card.Text>
                    <Card.Text>{movie.Year}</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <CommentArea movieId={movie.imdbID} />
          </Row>
        )}
      </Container>
    </>
  )
}

export default MovieDetails
