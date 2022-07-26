import React, { useEffect, useState } from "react";

const DiscussionContainer = ({ item }) => {
  const timeFormat = new Date(item.createdAt).toLocaleString();
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={item.avatarUrl}
          alt={`author of ${item.author}`}
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={item.url}>{item.title}</a>
        </h2>
        <div className="discussion__information">
          {item.author} / {timeFormat}
        </div>
      </div>
      <div className="discussion__answered">
        <p>☑</p>
      </div>
    </li>
  );
};
const Discussions = ({ list }) => {
  if (list.length === 0) {
    return <div>로딩중</div>;
  }
  return (
    <ul className="discussions__container">
      {list &&
        list.map((item) => (
          <DiscussionContainer item={item} key={item.id}></DiscussionContainer>
        ))}
    </ul>
  );
};

export default Discussions;
