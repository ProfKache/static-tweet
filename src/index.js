import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import avatar from './images/profile.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Tweet = () => (
  <div className="tweet">
    <Avatar />
    <div className="content">
      <Author />
      <Time />
      <Message />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
        <ShareButton />
      </div>
    </div>
  </div>
); 

const Avatar = () => (
  <img src={avatar} className="avatar" alt="avatar" />
);

const Message = () => (
  <div className="message">
    React is really awesome, epspecially when mixing with vim
  </div>
);

const Author = () => (
  <span className="author">
    <span className="name">Salim Kachemela</span>
    <span className="handle">@ProfKache</span>
  </span>
);

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fas fa-reply reply-button" />
);

const RetweetButton = () => (
  <i className="fas fa-retweet retweet-button" />
);

const LikeButton = () => (
  <i className="far fa-heart like-button" />
);

const ShareButton = () => (
  <i className="fas fa-share-alt share-button" />
);


ReactDOM.render(<Tweet />, document.querySelector('#root'));
