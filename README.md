React LMS Project - Setup & Dependencies

----------------------------------------
📦 Project Setup
----------------------------------------
1. Create the project using Create React App:
   npx create-react-app my-lms-app

2. Navigate into the project directory:
   cd my-lms-app

3. Install required dependencies:
   npm install react-router-dom

----------------------------------------
🗂 Directory Structure
----------------------------------------
- src/
  - components/        → Reusable UI components
  - pages/             → Top-level pages (Homepage, Courses, Login)
  - data/              → JSON-like JS files for courses and testimonials
  - images/            → Course thumbnails and logo
  - styles.css         → Global stylesheet
  - App.js             → App component with routing
  - index.js           → Entry point

----------------------------------------
📚 Features
----------------------------------------
- Homepage:
  - About section
  - Featured Courses (3 random)
  - Testimonials (2 random)

- Courses Page:
  - Enroll/Drop functionality
  - LocalStorage integration
  - Dynamic credit calculation

- Login Page:
  - Input validation
  - API-based user matching (jsonplaceholder.typicode.com)
  - Login status messaging with useContext

----------------------------------------
🔧 Notes
----------------------------------------
- All styling classes match the ones provided in the original HTML/CSS zip.
- Images used from `src/images/` directory.
- App uses functional components, hooks, and best practices.

----------------------------------------
🚀 To Run the Project
----------------------------------------
npm start

