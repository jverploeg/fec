# fec
OVERVIEW
This application is an e-commerce MERN variation (minus Mongoose) using Store2 as a local storage technology. This is a single-page web application that displays various information for products for a given product library. This is primarily a front-end application, with little interaction on the back-end other than fetching and storing data from the organization's API.

COMPONENTS
> Product Overview
  The product overview component displays large images of the current product with thumbnails of the different styles of that product. Also displayed is a product information        module with up-to-date information about that product. There is also a module to add this product to a user's cart by size and style.
  
> Related Products
  The related products component displays products that are related to the current product in a carousel visual. This component has the ability to add a related product to a list    of favorites, which the user can later browse.
  
> Ratings and Reviews
  The ratings and reviews component displays the overall product rating with various data displays and visuals. This component also displays a list of all of the reviews for that    product with the ability to sort and filter the list as the user specifies. The user is also able to add a new review in a pop-up modal. A user is allowed to write a review and    upload photos for that review, which will then be displayed in the review list.

TECHNOLOGIES
1. React
2. Express
3. Node.js
4. Store2
5. Bulma

GETTING STARTED
1. Navigate to user's preferred local directory and clone the repo
  $ git clone https://github.com/KamelCasedKids/fec.git
2. Navigate into the root folder of the directory
   Install Dependencies
    - npm install
   Build Webpack
    - npm run watch
   Start Server
    - npm run start-server

AUTHORS
Jack Verploeg
Joseph Monreal
Ryne Schroder
