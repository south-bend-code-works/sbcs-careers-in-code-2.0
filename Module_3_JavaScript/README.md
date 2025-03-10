# Module 3 JavaScript

## What is JavaScript?

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a programming language that makes web pages interactive. While HTML structures content and CSS styles it, JavaScript adds behavior and functionality.

JavaScript allows you to:
- Respond to user actions (clicks, form submissions, etc.)
- Update webpage content dynamically
- Fetch data from servers
- Create interactive features and animations

## Basic JavaScript Concepts

### Variables and Data Types
Variables store data that can be used and modified throughout your code:

```javascript
// Variables
let name = "John";              // String
const age = 25;                 // Number
let isStudent = true;           // Boolean
let colors = ["red", "blue"];   // Array
let person = {                  // Object
    name: "John",
    age: 25
};
```

### Functions
Functions are reusable blocks of code that perform specific tasks:

```javascript
// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Using the function
console.log(greet("John")); // Output: Hello, John!
```

### DOM Manipulation
The Document Object Model (DOM) is how JavaScript interacts with HTML elements:

```javascript
// Selecting elements
const element = document.getElementById("myId");
const elements = document.getElementsByClassName("myClass");

// Changing content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Modifying styles
element.style.color = "red";
element.classList.add("highlight");

// Creating elements
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
```

### Events
Events let you respond to user actions:

```javascript
// Click event
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    console.log("Form submitted!");
});
```

## Common Use Cases

### Form Validation
```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        event.preventDefault();
        alert("Please enter a valid email!");
    }
});
```

### API Requests
```javascript
async function getMovies() {
    try {
        const response = await fetch("https://api.example.com/movies");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
```

### Dynamic Content Updates
```javascript
function updateCounter() {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.textContent);
    counter.textContent = count + 1;
}
```

## Resources

- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Crash Course](https://www.youtube.com/watch?v=hdI2bqOjy3c)
- [JavaScript.info](https://javascript.info/)