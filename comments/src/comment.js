import React from 'react';

const Comment = ({ name, timeAgo, star, comment, avatar }) => {
  return (
    <div className="comment">
      <a className="avatar" href='/'>
        <img alt='avatar' src={avatar} />
      </a>
      <div className="content">
        <a className="author" href='/'>{name}</a>
        <div className="metadata">
          <div className="date">{timeAgo} gün önce</div>
          <div className="rating">
            <i className="star icon"></i>
            {star} yıldız
          </div>
        </div>
        <div className="text">
          {comment}
        </div>
      </div>
    </div>
  )
}

export default Comment;
