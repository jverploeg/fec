import React, { useState, forwardRef, useImperativeHandle } from 'react';

// TODO change to forwardRef component to access state at NewReviewModal
// COMPONENT
const NewReviewChars = forwardRef((props, ref) => {
  // variables
  const reviewsMetaObj = props.product.reviewsMeta.characteristics;
  const reviewsMetaKeys = Object.keys(reviewsMetaObj);
  // state
  const [selection1Key, setSelection1Key] = useState('');
  const [selection2Key, setSelection2Key] = useState('');
  const [selection3Key, setSelection3Key] = useState('');
  const [selection4Key, setSelection4Key] = useState('');
  const [selection5Key, setSelection5Key] = useState('');
  const [selection1, setSelection1] = useState('');
  const [selection2, setSelection2] = useState('');
  const [selection3, setSelection3] = useState('');
  const [selection4, setSelection4] = useState('');
  const [selection5, setSelection5] = useState('');

  // ref hooks
  useImperativeHandle(ref, () => {
    return {
      returnCharRatings: () => returnCharRatings()
    }
  });

  // hook methods
  const returnCharRatings = () => {
    return {
      selection1: {key: selection1Key, value: selection1},
      selection2: {key: selection2Key, value: selection2},
      selection3: {key: selection3Key, value: selection3},
      selection4: {key: selection4Key, value: selection4},
      selection5: {key: selection5Key, value: selection5},
    };
  };

  // setSelection1Key(scaleParams[0]);
  // setSelection2Key(scaleParams[1]);
  // setSelection3Key(scaleParams[2]);
  // setSelection4Key(scaleParams[3]);
  // setSelection5Key(scaleParams[4]);

  // utility methods
  const handleChange = (e) => {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'selection1') {
      setSelection1(value);
    } else if (name === 'selection2') {
      setSelection2(value);
    } else if (name === 'selection3') {
      setSelection3(value);
    } else if (name === 'selection4') {
      setSelection4(value);
    } else if (name === 'selection5') {
      setSelection5(value);
    }
  };

  return (
    <>
      {reviewsMetaKeys.map((key) => {

      let scaleParams = [];
      if (key === 'Size') {
        scaleParams = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];
      } else if (key === 'Width') {
        scaleParams = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
      } else if (key === 'Comfort') {
        scaleParams = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
      } else if (key === 'Quality') {
        scaleParams = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
      } else if (key === 'Length') {
        scaleParams = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
      } else if (key === 'Fit') {
        scaleParams = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'];
      }

      return (
        <div className="box">
          <div className="tile is-ancestor new-review-chars">
            <div className="char-label">
              <p className="has-text-dark is-size-6">{key}</p>
            </div>
            <div className="tile is-parent is-pulled-left">
              {scaleParams.map((param, i) => {
                return(
                  <div className="tile is-child">
                    <label className="radio">
                      <input type="radio" name={'selection' + i} value={param} onChange={handleChange} />
                      {param}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      );
    })}

    </>
  );
});

// EXPORTS
export default NewReviewChars;
