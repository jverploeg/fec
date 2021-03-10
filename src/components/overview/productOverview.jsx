/* eslint-disable no-console */
import React, { useState, useEffect, Suspense, Fragment} from 'react';
import Image from './image';
import Details from './details';

// COMPONENT
const ProductOverview = (focus) => {
  // PROPS
  const styles = focus.styles; // current product style data
  const product = focus.product; // current product
  const stylePhotos = styles.results; // array of arrays or each styles photos
  // const currentPhotos = stylePhotos[0] || {}; //first style photo set
  console.log({styles});
  console.log({product});
  console.log({stylePhotos});
  // console.log({currentPhotos});

  // STATES
  const [current, setCurrent] = useState({}); // focus.product);
  // const [current, setCurrent] = useState(focus.product);
  const [styleData, setStyleData] = useState([]); // data); // focus.styles);
  // const [styleData, setStyleData] = useState(data); // focus.styles);
  // get photos from children. Pass setPhotos down...
  const [photos, setPhotos] = useState({});
  // const [photos, setPhotos] = useState(styleData.results[0]);

  // FUNCTIONS
  // async function getProduct() {
  //   try {
  //     setCurrent(product);
  //     const
  // }

  // set current product from props
  useEffect(() => {
    setCurrent(product);
  }, [focus.product]);

  // set style data from props
  useEffect(() => {
    setStyleData(styles);
  }, [focus.styles]);
  console.log({ styleData });

  // get photos from children. Pass setPhotos down...
  useEffect(() => {
    // setPhotos(currentPhotos);
    setPhotos(styleData[0]);
  }, [styleData]);

  return (
    <div>
      <section className="hero is-grey-dark is-fullheight">
        <div className="container is-fluid is-maxwidth">
          <div className="tile is-ancestor has-text-centered is-12">
            <div className="tile is-12">
              <div className="tile is-parent is-6">
                <div className="tile is-child box is-vertical-center">
                  <Image pics={stylePhotos} />
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
                  Details
                    {/* // changePhotos={currentPhotos}
                    // onChange={handleStyleChange}
                    styles={styles}
                    product={product}
                  /> */}
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
