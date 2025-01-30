import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Beginner-Level Exercises
// Button Component – Create a reusable button component that accepts text, onClick,
//  and color as props.
// Card Component – Build a Card component that takes title, description, and imageURL as 
// props and displays them properly.
// User Profile Component – Create a UserProfile component that accepts a name, age, and 
// profile picture as props and displays them.
// Intermediate-Level Exercises
// Counter Component – Make a Counter component with a button to increase the count and display
//  the updated count.
// Todo List – Create a simple to-do list component that lets users add new tasks and displays 
// them.
// Theme Switcher – Make a component that toggles between light and dark modes 
// when a button is clicked.
// Advanced-Level Exercises
// Product Listing – Create a ProductList component that receives an array of product objects and displays them in a grid.
// Modal Component – Build a modal component that opens when a button is clicked and closes when clicking outside or on a close button.
// Tabs Component – Create a Tabs component that switches between different content sections when clicked.