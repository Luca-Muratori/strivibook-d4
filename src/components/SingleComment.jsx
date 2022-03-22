import { ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item style={{ color: "black" }}>
      {comment.comment}-{comment.rate}/5
    </ListGroup.Item>
  );
};

export default SingleComment;
