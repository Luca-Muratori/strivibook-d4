import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc4NzA0NjMsImV4cCI6MTY0OTA4MDA2M30.E0fAlaqcvndTYrKoyFDLp5L4ZuEGLdFZ37zKohfAzVk ",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted");
      window.location.href("http://localhost:3000/");
    }
  } catch (error) {}
};

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item style={{ color: "black" }}>
      {comment.comment}-{comment.rate}/5
      <Button onClick={() => deleteComment(comment._id)}>Delete</Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
