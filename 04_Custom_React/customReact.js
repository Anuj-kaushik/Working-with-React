// Custom Rendering: How React Works Under the Hood

// Imagine you are building your own version of React. At its core, React takes an element description
// (like an <a> tag) and translates it into something that the browser understands - a real DOM element.
// Let's break it down step by step.

const mainContainer = document.querySelector("#root");

// Step 1: Describe the Element (React's Virtual DOM Representation)
// ---------------------------------------------
// In React, when you write JSX like:
// <a href="https://google.com" target="_blank">Click me to visit Google</a>
// It gets converted into a JavaScript object that represents this structure.
// We are manually creating this object below to mimic React's internal representation:

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

// Step 2: Render the Element to the DOM
// ---------------------------------------------
// React has a method called ReactDOM.createRoot().render(), but we are simulating our own render function.
// Our function will take the element description and inject it into the actual DOM.

function customRender(reactElement, container) {
  // Step 3: Create the Actual DOM Element
  const domElement = document.createElement(reactElement.type);
  
  // Step 4: Set the Attributes (Props)
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  
  // Step 5: Add the Inner Content (Children)
  domElement.innerHTML = reactElement.children;

  // Step 6: Attach to the Root Container
  container.appendChild(domElement);
}

// Step 7: Call our Custom Render Function to Inject the Element into the Page
// This mimics how React's rendering process works.
customRender(reactElement, mainContainer);

// Summary:
// - React represents elements as plain JavaScript objects.
// - It then translates these objects into real DOM elements.
// - It efficiently updates the DOM by comparing changes (which we are not handling here yet).
// - Our customRender function does this manually, similar to how React handles UI rendering.
