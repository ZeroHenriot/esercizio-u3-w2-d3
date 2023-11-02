import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = (props) => {
  return (
    <div>
      <ListGroup>
        {props.comments.map((comment) => {
          return (
            <SingleComment
              key={comment._id}
              comment={comment}
              id={comment._id}
              refresh={props.refresh}
            ></SingleComment>
          )
        })}
      </ListGroup>
    </div>
  )
}
export default CommentList
