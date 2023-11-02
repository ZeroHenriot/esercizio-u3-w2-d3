import { ListGroupItem, Row, Col } from 'react-bootstrap'
import {
  Trash3Fill,
  StarFill,
  PersonFill,
  CardText,
} from 'react-bootstrap-icons'

const SingleComment = (props) => {
  const getAuthorName = (author) => {
    return author.split('@')[0]
  }

  const FirstLetterCapitalize = (comment) => {
    return comment.charAt(0).toUpperCase() + comment.slice(1)
  }
  return (
    <ListGroupItem className="bg-primary border-dark text-dark">
      <Row>
        <Col xl={8}>
          <p className="d-flex align-items-center">
            <CardText className="me-1"></CardText>
            {FirstLetterCapitalize(props.comment.comment)}
          </p>
        </Col>
        <Col xs={6} xl={2} className="p-xl-0">
          <p className="d-flex align-items-center">
            {props.comment.rate}/5
            <StarFill color="#F4BC1C" className="ms-1"></StarFill>
          </p>
        </Col>
        <Col xs={6} xl={2} className="text-end">
          <Trash3Fill
            className="text-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' +
                  props.id,
                {
                  method: 'DELETE',
                  headers: {
                    Authorization:
                      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
                  },
                }
              )
                .then((res) => {
                  if (res.ok) {
                  } else {
                    throw new Error('qualquadra non cosa')
                  }
                })
                .then(props.refresh)
                .catch((err) => {
                  console.log('Error', err)
                })
            }}
          ></Trash3Fill>
        </Col>
        <Col>
          <p className="d-flex align-items-center">
            <PersonFill className="me-1"></PersonFill>
            {getAuthorName(props.comment.author)}
          </p>
        </Col>
      </Row>
    </ListGroupItem>
  )
}

export default SingleComment
