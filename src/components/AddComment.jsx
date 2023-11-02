import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = (props) => {
  const [comments, setComments] = useState({
    comment: '',
    rate: 1,
    elementId: props.movieId,
  })

  const addNewComment = (e) => {
    e.preventDefault()
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ ...comments, elementId: props.movieId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`Errore nell'invio del commento`)
        }
      })
      .then(() => {
        setComments({ comment: '', rate: 1, elementId: props.movieId })
      })
      .catch((err) => {
        console.log('Hai avuto un errore', err)
      })
  }
  return (
    <Form onSubmit={addNewComment}>
      <div>
        <Form.Group className="mb-3">
          <Form.Label className="text-dark my-2">
            Lascia il tuo commento
          </Form.Label>
          <Form.Control
            as="textarea"
            className="bg-primary text-dark border-dark"
            rows={2}
            value={comments.comment}
            onChange={(e) => {
              setComments({ ...comments, comment: e.target.value })
            }}
          />
        </Form.Group>
        <Form.Select
          aria-label="Voto"
          className="bg-primary text-dark border-dark"
          value={comments.rate}
          onChange={(e) => {
            setComments({ ...comments, rate: e.target.value })
          }}
        >
          <option>Dai un voto al libro</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        <Button type="submit" className="w-100 my-2 btn-secondary">
          Vota
        </Button>
      </div>
    </Form>
  )
}

export default AddComment
