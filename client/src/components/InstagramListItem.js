import React from 'react';
const randomNumberTo15 = () => Math.floor(Math.random() * 15);
const randomNumberTo50 = () => Math.floor(Math.random() * 50);

const InstagramListItem = ({ image }) => (
  <div className="ui fluid card right">
    <div className="content">
      <div className="right floated meta">14h</div>
      <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/elliot.jpg" /> Elliot
    </div>
    <div className="image">
      <img src={image} />
      <p>text</p>
    </div>
    <div className="content">
      <span className="right floated">
        <i className="heart outline like icon" />
        {randomNumberTo50()} likes
      </span>
      <i className="comment icon" />
      {randomNumberTo15()} comments
    </div>
    <div className="extra content">
      <div className="ui large transparent left icon input">
        <i className="heart outline icon" />
        <input type="text" placeholder="Add Comment..." />
      </div>
    </div>
  </div>
);

export default InstagramListItem;
