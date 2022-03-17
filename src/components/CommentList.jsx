import SingleComment from "./SingleComment";

const CommentList = () => {
  return (
    <div>
      {this.props.comment.map((c) => (
        <SingleComment comment={c} />
      ))}
    </div>
  );
};

export default CommentList;
