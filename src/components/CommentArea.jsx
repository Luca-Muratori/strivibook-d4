import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
const CommentArea = ({ asin }) => {
  const [comment, setComment] = useState([]);

  // state = {
  //   comment: [],
  //   isLoading: true,
  // };

  useEffect(() => {
    const getComment = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc4NzA0NjMsImV4cCI6MTY0OTA4MDA2M30.E0fAlaqcvndTYrKoyFDLp5L4ZuEGLdFZ37zKohfAzVk",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();

          setComment(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (asin) {
      getComment();
    }
  }, [asin]);
  return (
    <div>
      <AddComment asin={asin} />
      <CommentList commentToShow={comment} />
    </div>
  );
};

export default CommentArea;
