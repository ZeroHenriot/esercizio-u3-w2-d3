import { Component } from 'react'
import { Card, Col, Container, Row, Alert, Spinner } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=81846f9a&s='

class Movie extends Component {
  state = {
    isLoading: true,
    isError: false,
    movies: [],
  }
  getMovies = () => {
    fetch(url + this.props.saga)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`C'hai un errore, rincoglionito`)
        }
      })
      .then((data) => {
        console.log(data.Search)
        this.setState({
          movies: data.Search,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log('ERRORE', err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  componentDidMount() {
    this.getMovies()
  }
  render() {
    return (
      <>
        <Container fluid className="mt-5">
          <h2 className="mb-5 fs-3 fw-bold text-white ms-3">
            {this.props.saga.toUpperCase()}
          </h2>
          <Carousel interval={null}>
            <Carousel.Item>
              {this.state.isLoading && (
                <div className="text-center">
                  <Spinner animation="grow" variant="secondary" />
                </div>
              )}
              {this.state.isError && (
                <div className="text-center px-2">
                  <Alert variant="danger">
                    Bravo cojone, mo risolvi i tuoi bug
                  </Alert>
                </div>
              )}
              <Row className="justify-content-center">
                {this.state.movies.slice(0, 5).map((movie) => (
                  <Col
                    className="col-md-4 col-lg-2 px-1 mx-3"
                    key={movie.imdbID}
                  >
                    <Link to={`/moviedetail/${movie.imdbID}`}>
                      <Card className="h-100 bg-primary">
                        <Card.Img
                          variant="top"
                          src={movie.Poster}
                          alt={movie.Title}
                          className="h-100 moviesImg"
                        />
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="justify-content-center">
                {this.state.movies.slice(5, 10).map((movie) => (
                  <Col
                    className="col-md-4 col-lg-2 px-1 mx-3"
                    key={movie.imdbID}
                  >
                    <Link to={'/moviedetail/' + movie.imdbID}>
                      <Card className="h-100 bg-primary">
                        <Card.Img
                          variant="top"
                          src={movie.Poster}
                          alt={movie.Title}
                          className="h-100 moviesImg"
                        />
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </>
    )
  }
}

export default Movie
