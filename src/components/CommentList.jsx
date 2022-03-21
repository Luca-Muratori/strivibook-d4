import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";
const CommentList = ({ commentToShow }) => {
  return (
    <ListGroup>
      {commentToShow.map((c) => (
        <SingleComment comment={c} key={c._id} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
