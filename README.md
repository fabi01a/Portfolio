# Software Development Portfolio

A dynamic portfolio website built with Node.js, Express, and Pug to showcase my software development projects, technical skills, and experience.

This project was developed as part of the Treehouse Full Stack JavaScript Techdegree and demonstrates server-side JavaScript, dynamic routing, template rendering, and error handling.

## Features

- **Dynamic Project Gallery:** Displays eight software development projects with screenshots and links to individual project pages.
- **Individual Project Pages:** Generates project details dynamically using data stored in a JSON file.
- **Server-Side Rendering:** Uses Pug templates to render HTML through Express.
- **Dynamic Routing:** Uses Express routes to display projects based on their unique IDs.
- **Responsive Design:** Adapts the portfolio layout to different screen sizes.
- **About Page:** Includes professional background, technical skills, and contact information.
- **Custom Error Handling:** Handles invalid routes and server errors with custom error pages.
- **Static Asset Management:** Serves CSS, JavaScript, and images using Express middleware.

## Technologies Used

- JavaScript
- Node.js
- Express.js
- Pug
- HTML5
- CSS3
- JSON
- Git and GitHub

## Featured Projects

1. Mastermind Game
2. Silicon Valley Trail
3. Weather App
4. OOP Game (Phrase Hunter)
5. Employee Directory
6. Interactive Form
7. Data Pagination and Filtering
8. Random Quote Generator

Each project includes a description, technologies used, screenshots, and a link to its GitHub repository.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fabi01a/Portfolio.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   `http://localhost:3000`



## How It Works

The Express application reads project information from `data.json` and passes it to Pug templates to generate dynamic HTML.

The homepage displays the project gallery, while the `/projects/:id` route retrieves and renders the corresponding project's details. The `/about` route displays professional information, and custom error-handling middleware manages invalid URLs and server errors.

Static assets are served through Express middleware.

## Future Improvements

- Deploy the portfolio to a public hosting platform.
- Add live demo links for projects that support browser-based demonstrations.
- Continue expanding the portfolio with new software development projects.

## Author

**Fabiola Gonzalez**

- [GitHub](https://github.com/fabi01a)
- [LinkedIn](https://www.linkedin.com/in/gonzalezfabiola)
