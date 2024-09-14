import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="container1">
    <h1 className="heading1">Social Buttons</h1>
    <div className="containers">
      <Button buttonText="Like" className="likeButton" />
      <Button buttonText="Comment" className="commentButton" />
      <Button buttonText="Share" className="shareButton" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
