import { useEffect, useState } from 'react'
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
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
  return (
    <>
      <Container>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="grow" variant="secondary" />
          </div>
        )}
        {isError && (
          <div className="text-center px-2">
            <Alert variant="danger">Bravo cojone, mo risolvi i tuoi bug</Alert>
          </div>
        )}
        <Row className="justify-content-center">
          <Col className="col-md-4 px-0">
            <Card className="h-100 border-0 bg-primary">
              <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
                className="h-100"
              />
            </Card>
          </Col>
          <Col className="col-md-8  px-0">
            <Card className="h-100 border-0 bg-primary text-white">
              <Card.Text className="fs-4 ms-2 text-secondary">
                {movie.Title}
              </Card.Text>
              <Card.Text className="fs-4 ms-2">{movie.Plot}</Card.Text>
              <Card.Text className="fs-4 ms-2">{movie.Genre}</Card.Text>
              <div className="d-flex flex-column h-100 justify-content-end">
                <div className="d-flex justify-content-between">
                  <Card.Text className="fs-4 ms-2">{movie.Country}</Card.Text>
                  <Card.Text className="fs-4 ms-2">{movie.Language}</Card.Text>
                </div>
                <div className="d-flex justify-content-between">
                  <Card.Text className="fs-4 ms-2">{movie.Writer}</Card.Text>
                  <Card.Text className="fs-4 ms-2">{movie.Year}</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <CommentArea movieId={movie.imdbID} />
        </Row>
      </Container>
    </>
  )
}

export default MovieDetails
