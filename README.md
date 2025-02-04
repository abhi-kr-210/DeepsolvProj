# MONGODB ATLAS INTEGRATION PROJECT

## PROJECT OVERVIEW
This project integrates MongoDB Atlas with a Node.js Express server to create a backend application for scraping and storing Facebook page details.

# *Facebook Page Scraper API*  

A FastAPI-based service to scrape Facebook pages, store details in MongoDB, and expose APIs for fetching page information, posts, followers, and filtering pages by followers count.  
- server.js: Main entry point of the Node.js Express server.
- models/: Directory containing MongoDB Mongoose models for Page, Post, Comment, and User.
  - Page.js: Mongoose schema for storing Facebook page details.
  - Post.js: Mongoose schema for storing posts related to pages.
  - Comment.js: Mongoose schema for storing comments on posts.
  - User.js: Mongoose schema for storing user details.
- routes/: Directory containing Express routes.
  - pageRoutes.js: Routes for handling page-related operations.
- controllers/: Directory containing controller functions.
  - pageController.js: Controller functions for handling page operations like getting details and scraping.
- services/: Directory containing service functions.
  - scraper.js: Service function for scraping Facebook page details using Axios and Cheerio.
- dotenv: Configuration file for environment variables.
- index.js: File containing MongoDB Atlas constants.
- constants.js:File containing DB Name
- README.md: This file, providing an overview of the project structure and usage instructions.

## USAGE
1. Clone the repository.
2. Install dependencies with npm install.
3. Set up MongoDB Atlas and configure .env file with MONGO_URI.
4. Run the server with npm start.

## API ENDPOINTS
- GET /api/pages/:username: Fetch details of a Facebook page by username.
- POST /api/pages/scrape/:username: Scrape and save details of a Facebook page by username.

## DEPENDENCIES
- Express.js: Web framework for Node.js.
- Mongoose: MongoDB object modeling for Node.js.
- Axios: HTTP client for making requests.
- Cheerio: Implementation of core jQuery for server-side.

## NOTES
Ensure MongoDB Atlas connection details are correctly configured in .env file before running the server.
