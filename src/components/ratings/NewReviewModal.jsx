import React, { useState } from 'react';
import StarRating from './starRating';
import NewReviewChars from './NewReviewChars';

const NewReviewModal = (props) => {
  // variables and state
  const { product } = props;
  const [newReviewStarRating, setNewReviewStarRating] = useState(null);
  const [newReviewSummary, setNewReviewSummary] = useState('');
  const [newReviewBody, setNewReviewBody] = useState('');
  const [newReviewUsername, setNewReviewUsername] = useState('');
  const [newReviewEmail, setNewReviewEmail] = useState('');
  const [newReviewPhotos, setNewReviewPhotos] = useState([]);
  const [newReviewIsRecommended, setNewReviewIsRecommended] = useState('yes');
  const [newReviewCharacteristics, setNewReviewCharacteristics] = useState({});
  const [isReviewSummaryComplete, setIsReviewSummaryComplete] = useState(true);
  const [isReviewBodyComplete, setIsReviewBodyComplete] = useState(false);
  const [isReviewComplete, setIsReviewComplete] = useState(false);
  const [isReviewUsernameComplete, setIsReviewUsernameComplete] = useState(false);
  const [reviewSummaryValidationMessage, setReviewSummaryValidationMessage] = useState('review summary is required');
  const [reviewSummaryValidationStyle, setReviewSummaryValidationStyle] = useState('is-danger');
  const [reviewBodyValidationMessage, setReviewBodyValidationMessage] = useState('review body is required');
  const [reviewBodyValidationStyle, setReviewBodyValidationStyle] = useState('is-danger');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [reviewEmailValidationMessage, setReviewEmailValidationMessage] = useState('must be a valid email address');
  const [reviewEmailValidationStyle, setReviewEmailValidationStyle] = useState('is-danger');
  const [reviewUsernameValidationMessage, setReviewUsernameValidationMessage] = useState('must enter a username');
  const [reviewUsernameValidationStyle, setReviewUsernameValidationStyle] = useState('is-danger');
  const [newReviewCharRatings, setNewReviewCharRatings] = useState({});

  // const inputRef = React.useRef({});
  // console.log(inputRef.current);
  const starRatingRef = React.useRef();
  // console.log(starRatingRef.current);
  const ratingCharRef = React.useRef();
  // console.log(ratingCharRef.current);



  // form validation
  const formValidation = () => {
    if (newReviewSummary.length < 1) {
      setIsReviewSummaryComplete(false);
      setReviewSummaryValidationMessage('review summary is required');
      setReviewSummaryValidationStyle('is-danger');
    } else if (newReviewSummary.length > 60) {
      setIsReviewSummaryComplete(false);
      setReviewSummaryValidationMessage('review summary must be less than 60 characters');
      setReviewSummaryValidationStyle('is-danger');
    } else {
      setIsReviewSummaryComplete(true);
      setReviewSummaryValidationMessage('');
      setReviewSummaryValidationStyle('is-success');
    }
    if (newReviewBody.length < 50) {
      const charRemaining = 50 - newReviewBody.length;
      setIsReviewBodyComplete(false);
      setReviewBodyValidationStyle('is-danger');
      setReviewBodyValidationMessage(`Minimum required characters left: ${charRemaining}`);
    } else if (newReviewBody.length > 1000) {
      setIsReviewBodyComplete(false);
      setReviewBodyValidationStyle('is-danger');
      setReviewBodyValidationMessage('review body must be less than 1000 characters');
    } else {
      setIsReviewBodyComplete(true);
      setReviewBodyValidationStyle('is-success');
      setReviewBodyValidationMessage('Minimum reached');
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newReviewEmail)) {
      setIsEmailValid(true);
      setReviewEmailValidationStyle('is-success');
      setReviewEmailValidationMessage('');
    } else {
      console.log({newReviewEmail});
      setIsEmailValid(false);
      setReviewEmailValidationStyle('is-danger');
      setReviewEmailValidationMessage('must be a valid email address');
    }
    if (newReviewUsername.length < 1) {
      setIsReviewUsernameComplete(false);
      setReviewUsernameValidationMessage('must enter a username');
      setReviewUsernameValidationStyle('is-danger');
    } else {
      setIsReviewUsernameComplete(true);
      setReviewUsernameValidationMessage('');
      setReviewUsernameValidationStyle('is-success');
    }
  };

  // functions
  const getNewReviewStarRating = () => {
    const rating = starRatingRef.current.returnStarRating();
    setNewReviewStarRating(rating);
  };
  const getNewReviewCharRatings = () => {
    const charRatings = ratingCharRef.current.returnCharRatings();
    setNewReviewCharRatings(charRatings);
  };
  const handleChange = (e) => {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'summary') {
      setNewReviewSummary(value);
    } else if (name === 'body') {
      setNewReviewBody(value);
    } else if (name === 'username') {
      setNewReviewUsername(value);
    } else if (name === 'email') {
      setNewReviewEmail(value);
    } else if (name === 'isRecommended') {
      setNewReviewIsRecommended(value);
    }
    formValidation();
  };
  const resetState = () => {
    setNewReviewCharRatings({});
    setNewReviewStarRating(null);
    setNewReviewSummary('');
    setNewReviewBody('');
    setNewReviewUsername('');
    setNewReviewEmail('');
    setNewReviewPhotos([]);
    setNewReviewIsRecommended(null);
    setNewReviewCharacteristics({});
  };
  const returnNewReview = () => {
    const newReview = {
      rating: newReviewStarRating,
      summary: newReviewSummary,
      body: newReviewBody,
      username: newReviewUsername,
      email: newReviewEmail,
      photos: newReviewPhotos,
      isRecommended: newReviewIsRecommended,
      characteristics: newReviewCharacteristics,
    };
    return newReview;
  };
  const handleSubmit = () => {
    getNewReviewStarRating();
    getNewReviewCharRatings();
    returnNewReview();
    resetState();
    props.closeNewReviewModal();
  };
  const handleClose = () => {
    resetState();
    props.closeNewReviewModal();
  };

  return (
    <>
      <div className="new-review-modal">

        {/* NEW REVIEW FORM */}
        <div className="tile is-ancestor is-vertical">
          {/* TITLE */}
          <div className="tile is-child is-vertical">
            <h1 className="title is-2 pb-0">Write Your Review</h1>
            <em><h3 className="has-text-dark is-size-5 pt-0">{'About the ' + product.name}</h3></em>
          </div>
          <div className="tile is-child"></div>

          {/* STAR RATINGS */}
          <div className="tile is-child">
            <StarRating ref={starRatingRef} />
          </div>

          {/* RECOMMEND? */}
          <div className="tile is-child">
              <div className="field">
                <h3 className="has-text-dark is-6">Do you recommend this product?</h3>
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="isRecommended" value="yes" checked={newReviewIsRecommended === 'yes'} onChange={handleChange} />
                    Yes
                  </label>
                  <label className="radio">
                    <input type="radio" name="isRecommended" value="no" checked={newReviewIsRecommended === 'no'} onChange={handleChange} />
                    No
                  </label>
                </div>
              </div>
          </div>
          <div className="tile is-child"></div>

        </div>

        {/* CHARACTERISTICS */}
        <NewReviewChars product={product} ref={ratingCharRef} />

        {/* REVIEW SUMMARY (<60 chars) */}
        <div className="field">
          <label className="label">Summary</label>
          <div className="control">
            <input className={'input ' + reviewSummaryValidationStyle} name="summary" type="text" placeholder="Example: Best purchase ever!" onChange={handleChange}>
            </input>
          </div>
          <p className={'help ' + reviewSummaryValidationStyle}>{reviewSummaryValidationMessage}</p>
        </div>

        {/* REVIEW BODY (>50 chars, <1000 chars) */}
        <div className="field">
          <label className="label">Review Body</label>
          <div className="control">
            <textarea className={'textarea ' + reviewBodyValidationStyle} name="body" placeholder="Why did you like the product or not?" onChange={handleChange}></textarea>
          </div>
          <p className={'help ' + reviewBodyValidationStyle}>{reviewBodyValidationMessage}</p>
        </div>

        {/* UPLOAD PHOTOS */}

        {/* NICKNAME */}
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className={'input ' + reviewUsernameValidationStyle} name="username" type="text" placeholder="Example: jackson11!" onChange={handleChange}>
            </input>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i></i>
            </span>
          </div>
          <p className={'help ' + reviewUsernameValidationStyle}>{reviewUsernameValidationMessage}</p>
        </div>

        {/* EMAIL */}
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className={'input ' + reviewEmailValidationStyle} name="email" type="email" placeholder="Email input" onChange={handleChange}>
            </input>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i></i>
            </span>
          </div>
          <p className={'help ' + reviewEmailValidationStyle}>{reviewEmailValidationMessage}</p>
        </div>

        {/* SUBMIT & CANCEL BUTTONS */}
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => handleSubmit()}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light" onClick={() => handleClose()}>Cancel</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default NewReviewModal;
