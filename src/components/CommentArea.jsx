import { useEffect, useState } from 'react'
import { Alert, Col, Spinner } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'

const CommentArea = (props) => {
  const [comment, setComment] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + props.movieId,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Hai un errore')
        }
      })
      .then((data) => {
        setTimeout(() => {
          setComment(data)
          setIsLoading(false)
        }, 650)
      })
      .catch((err) => {
        setIsLoading(false)
        setIsError(true)
        console.log('Errore nel caricamento dei commenti', err)
      })
  }

  useEffect(() => {
    if (props.movieId) {
      getComments()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.movieId])

  return (
    <>
      {props.movieId && (
        <Col xs={10} className="mt-2 p-0" id="commentArea">
          {isLoading && (
            <div className="text-center">
              <Spinner
                animation="grow"
                variant="secondary"
                style={{ height: '50px', width: '50px' }}
                className="my-5"
              ></Spinner>
            </div>
          )}
          {isError && (
            <div className="text-center px-2">
              <Alert variant="danger">
                Hai avuto un errore nel caricamente dei commenti
              </Alert>
            </div>
          )}

          {!isLoading && !isError && comment && (
            <>
              <CommentList
                refresh={getComments}
                comments={comment}
              ></CommentList>
              <AddComment movieId={props.movieId}></AddComment>
            </>
          )}
        </Col>
      )}
    </>
  )
}

export default CommentArea
