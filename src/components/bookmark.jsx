import React from "react";

const BookMark = ({ status, onBookMark, userId }) => {
  return (
    <button onClick={() => onBookMark(userId)}>
      <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
    </button>
  );
};

export default BookMark;
