import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";
const CommentList = ({ commentToShow }) => {
  return (
    <ListGroup.Item>
      {commentToShow.map((c) => (
        <SingleComment comment={c} key={c._id} />
      ))}
    </ListGroup.Item>
  );
};

export default CommentList;
