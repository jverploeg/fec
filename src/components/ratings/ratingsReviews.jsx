import React, { useState, useEffect } from 'react';
import OverallStarRating from '../helpers/OverallStarRating';
import NewReview from './NewReview';
import DropDown from '../helpers/dropDown';
import StickyNavBar from './StickyNavBar';
import RatingCard from './RatingCard';
import { FiArrowUpCircle } from 'react-icons/fi';
import { ProductContext } from '../context/product-context.js'

// import {ThemeContext} from './theme-context';

// function ThemeTogglerButton() {
//   // The Theme Toggler Button receives not only the theme
//   // but also a toggleTheme function from the context
//   return (
//     <ThemeContext.Consumer>
//       {({theme, toggleTheme}) => (
//         <button
//           onClick={toggleTheme}
//           style={{backgroundColor: theme.background}}>
//           Toggle Theme
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// }

// export default ThemeTogglerButton;

// COMPONENT
const RatingsReviews = (props) => {
  // variables
  const currentProduct = props.product;
  const allReviews = props.reviews;

  // state
  const [listedReviews, setListedReviews] = useState([]);

  // sticky navbar handler
  useEffect(() => {
    const header = document.getElementById("navbar");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
  <section className="section">

    <div id="Ratings-Reviews" className="columns is-mobile is-centered">

        {/* HORIZONTAL SPACER */}
        <div className="column is-1"/>

        {/* OVERALL RATING CARD AND REVIEWS LIST */}
        {/* OVERALL RATING CARD */}
        <div className="column is-3">
          <div className="block">
            {/* INDIVIDUAL RATING CARD */}
            <RatingCard product={currentProduct} reviews={allReviews}/>
          </div>
        </div>

        <div className="column is-1" />

        {/* REVIEWS LIST AND NAV BAR */}
        <div className="column is-6.5">
          <div className="block">
            <section className="hero is-grey-dark">
              {/* STICKY NAV BAR */}
              <StickyNavBar />

              {/* REVIEWS LIST COMPONENT */}
              <p>
                Lately, I’ve been noticing how my sentences have a tendency to keep going when I write them onscreen. This goes for concentrated writing as well as correspondence. (Twain probably believed that correspondence, in an ideal world, also demands concentration. But he never used email.) Last week I caught myself packing four conjunctions into a three-line sentence in an email. That’s inexcusable. Since then, I have tried to eschew conjunctions whenever possible. Gone are the commas, the and’s, but’s, and so’s; in are staccato declaratives. Better to read like bad Hemingway than bad Faulkner.

                Length–as we all know, and for lack of a more original or effective way of saying it–matters. But (ahem), it’s also a matter of how you use it. Style and length are technically two different things.

                Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don’t have time to compose letters and post them anymore–much less pay postage, what with all the banks kinda-sorta losing our money these days–so we blast a few emails. We don’t have time to talk, so we text. We don’t have time to text to specific people, so we update our Facebook status. We don’t have time to write essays, so we blog.

                I’m less interested by the superficial reduction of words–i.e. the always charming imho or c u l8r–than the genres in which those communications occur: blogs, texts, tweets, emails. All these interstitial communiques, do they really reflect super brevity that would make Twain proud? Or do they just reflect poorly stylized writing that desperately seeks a clearer form?

                I rather think the latter. Clive Thompson wrote last month in the NYT Magazine that constant digital updates, after a day, can begin “to feel like a short story; follow it for a month, and it’s a novel.” He was right to see the bits as part of a larger whole. The words now flying through our digital pipes & ether more or less tend to resemble parts of bigger units, perhaps even familiar genres. But stories and novels have definite conclusions; they also have conventional lengths. Quick, how long is the conventional blog, when you add up all of its posts and comments? How long is the longest email thread you send back and forth on a single topic?

                Most important: What exactly are we writing when we’re doing all of this writing? I won’t pretend to coin a whole new term here; I still think the best we can muster is a more fitting analogue. And if we must find an analogue in an existing literary unit, I propose the paragraph. Our constant writing has begun to feel like a neverending digital paragraph. Not a tight, stabbing paragraph from The Sun Also Rises or even a graceful, sometimes-slinking, sometimes-soaring paragraph from Absalom! Absalom!, I mean a convoluted, haphazard, meandering paragraph, something like Kerouac’s original draft of On the Road–only taped together by bytes. And 1 percent as interesting.

                Paragraphs, particularly those that wrap from one page to the next, inherently possess a necessary suspension that tightens the reader’s focus yet breaks down the narrative into digestable sections. Just like emails or blogs or texts. The mental questions while reading all of these feel the same:

                “Is this the last line or is there more?”

                “Is the writer really trying to say something here, or just setting up a larger point?”

                “Does this part have the information I’m looking for?”

                (“Can I skip ahead?”)
                David F. Smydra Jr. is a reporter, writer, and editor living in Silicon Valley. He occasionally posts similar bursts of media fancy here.

                Just the day before, our host had written of the challenges of writing short. In journalism–my friend’s chosen trade, and mostly my own, too–Mark Twain’s observation undoubtedly applies: “I didn’t have time to write a short letter, so I wrote a long one instead.” The principle holds across genres, in letters, reporting, and other writing. It’s harder to be concise than to blather. (Full disclosure, this blog post will clock in at a blather-esque 803 words.) Good writing is boiled down, not baked full of air like a souffl??. No matter how yummy souffl??s may be. Which they are. Yummy like a Grisham novel.

                Lately, I’ve been noticing how my sentences have a tendency to keep going when I write them onscreen. This goes for concentrated writing as well as correspondence. (Twain probably believed that correspondence, in an ideal world, also demands concentration. But he never used email.) Last week I caught myself packing four conjunctions into a three-line sentence in an email. That’s inexcusable. Since then, I have tried to eschew conjunctions whenever possible. Gone are the commas, the and’s, but’s, and so’s; in are staccato declaratives. Better to read like bad Hemingway than bad Faulkner.

                Length–as we all know, and for lack of a more original or effective way of saying it–matters. But (ahem), it’s also a matter of how you use it. Style and length are technically two different things.

                Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don’t have time to compose letters and post them anymore–much less pay postage, what with all the banks kinda-sorta losing our money these days–so we blast a few emails. We don’t have time to talk, so we text. We don’t have time to text to specific people, so we update our Facebook status. We don’t have time to write essays, so we blog.
              </p>
            </section>
          </div>
        </div>

        {/* HORIZONTAL SPACER */}
        <div className="column is-1"/>

    </div>

  </section>


  );
};

// EXPORTS
export default RatingsReviews;
