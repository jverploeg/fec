/* eslint-disable no-console */
import React, { useState, useEffect, useCallback, useRef, useContext} from 'react';
import Image from './image';
import Details from './details';

// COMPONENT
const ProductOverview = (focus) => {
  // PROPS
  const { styles } = focus; // current product style data
  const { product } = focus; // current product

  // STATES
  const [current, setCurrent] = useState({}); // current product
  const [styleData, setStyleData] = useState([]); // styleData array for curProd
  const [callbackSetup, setCallback] = useState(false);
  const stateRef = useRef();

  stateRef.current = styleData;

  function setup (callback) {
    setInterval(callback, 1000);
  }
  function handle() {
    setStyleData(styles);
    if (!callbackSetup) {
      setup(() => { });
      setCallback(true);
    }
  }

  // EFFECTS rerender state on prop change
  // set current product from props
  useEffect(() => {
    setCurrent(product);
  }, [focus.product]);

  // set style data from props
  useEffect(() => {
    setStyleData(styles);
  }, [focus.styles]);

  // get photos from children. Pass setPhotos down...
  // useEffect(() => {
  //   // setPhotos(currentPhotos);
  //   setPhotos(styleData[0]);
  // }, [styleData]);
  // console.log({ photos });
  // FUNCTIONS
  // pass down to details to return the currently selected style. useEffect???
  // need to get styleSet photos from details. Pass setPhotos down...
  const [photos, setPhotos] = useState({});
  // need to pass setPhotos back up...
  const handleStyleChange = (newValue) => {
    setPhotos(newValue);
    // newValue = Value;
    // return newValue;
  };
  // console.log({photos});
  useEffect(() => {
    setPhotos(photos);
  }, [photos]);
  // console.log({photos});

  return (
    <div>
      <section className="hero is-grey-dark is-fullheight">
        <div className="container is-fluid is-maxwidth">
          <div className="tile is-ancestor has-text-centered is-12">
            <div className="tile is-12">
              <div className="tile is-parent is-6">
                <div className="tile is-child box is-vertical-center">
                  <Image styles={styles} current={photos} />
                  {/* <Image pics={initialPhotos}/> */}
                </div>
              </div>
              <div className="tile is-parent is-6">
                <div className="tile is-child box is-vertical-center">
                    {/* <Details
                        setPhotos={setPhotos}
                        // onChange={handleStyleChange}
                        styles={styleData}
                        product={current} /> */}
                  <Details
                    onChange={(value) => handleStyleChange(value)}
                    styles={styles}
                    product={product}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section space" />
    </div>
  );
}

// EXPORT
export default ProductOverview;

// previous version
// return (
// <div>
//     <section className="hero is-grey-dark is-fullheight">
//     <div className="container is-fluid">
//         <div className="tile is-ancestor has-text-centered">
//         <div className="tile">
//         <div className="tile is-parent">
//             <div className="tile is-child box is-vertical-center">
//                 <Image pics={photos}/>
//             </div>
//         </div>
//         <div className="tile is-parent">
//             <div className="tile is-child box is-vertical-center">
//             <Details
//                 setPhotos={setPhotos}
//                 // onChange={handleStyleChange}
//                 styles={styleData}
//                 product={current} />
//             </div>
//         </div>
//         </div>
//         </div>
//     </div>
//     </section>
//     <section className="section space" />
// </div>
// );
