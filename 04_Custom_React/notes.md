## Understanding JSX and How React Works Under the Hood

### What is JSX?
JSX (JavaScript XML) is a special syntax used in React that looks similar to HTML but works inside JavaScript. It allows us to write HTML-like code directly in JavaScript files, making UI development more intuitive.

Example:
```jsx
function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}
```

However, browsers **do not understand JSX** directly. It needs to be converted into standard JavaScript using a tool called **Babel**.

### How JSX Works Behind the Scenes
When JSX code is written, Babel converts it into `React.createElement()` calls. For example:
```jsx
const element = <h1>Hello, React!</h1>;
```
Gets transformed into:
```js
const element = React.createElement('h1', null, 'Hello, React!');
```
This function creates a **JavaScript object** that React can process.

### React's Internal Representation of JSX (Source Code Reference)
If we check React's source code (`packages/react/src/jsx/ReactJSXElement.js`), we see that JSX elements are converted into plain JavaScript objects structured like this:
```js
const reactElement = {
  type: 'h1',
  key: null,
  ref: null,
  props: {
    children: 'Hello, React!'
  }
};
```
These objects are then processed by React to generate the Virtual DOM.

### Rendering JSX in React
React renders elements by injecting them into the DOM. It requires a **root element** where all React components will be mounted.

Example:
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);
```

### Why `<MyApp />` Works Like a Function
- `<MyApp />` is actually a function component.
- You might wonder, *if it's just a function, why can't we write `MyApp()` instead?*
- Technically, calling `MyApp()` works, but it's **not recommended** because React optimizes rendering internally when JSX is used.

### Creating React Elements Without JSX
If JSX is not used, React elements can still be created manually using `React.createElement()`:
```js
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
);

createRoot(document.getElementById('root')).render(reactElement);
```

### Injecting JavaScript Variables into JSX
You can embed JavaScript variables inside JSX using **evaluated expressions** inside curly braces `{}`:
```jsx
function App() {
  const username = 'John Doe';
  return (
    <>
      <h1>{username}</h1>
    </>
  );
}
```

- `{username}` gets evaluated, and its value is injected into the JSX.
- However, **control structures like `if-else` cannot be used directly** inside JSX.

### Why Can't We Use `if-else` in JSX?
JSX gets converted into `React.createElement()`, which expects values inside elements, not logic.

Example:
```jsx
const condition = true;
const element = <h1>{condition ? 'Hello' : 'Goodbye'}</h1>;  // ✅ Allowed
```
But this is **not allowed**:
```jsx
const element = <h1>{ if (condition) 'Hello'; else 'Goodbye'; }</h1>;  // ❌ Not allowed
```

### Custom Rendering Like React
React follows an internal rendering process similar to this:
```js
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.props.children;

  for (const prop in reactElement.props) {
    if (prop !== 'children') {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }

  container.appendChild(domElement);
}
```

This mimics how React injects elements into the DOM. Instead of manually updating the UI, React does this efficiently using the **Virtual DOM**.

### How Babel and React Work Together
- **Babel** transforms JSX into `React.createElement()`.
- **React's core library** processes these objects and creates the **Virtual DOM**.
- **ReactDOM** efficiently updates only the changed elements in the browser’s real DOM.

### Looking at React's Source Code
If you want to explore how JSX transformation happens internally, check React's GitHub repo:
- **Navigate to:** `packages/react/src/jsx`
- **Key files:**
  - `ReactJSXElement.js` → Defines how JSX elements are structured.
  - `ReactJSXRuntime.js` → Handles JSX compilation at runtime.
- Inside, you’ll find the implementation of JSX transformation and how elements are created.

---
✅ *Understanding JSX and how React works internally will help you build more optimized applications!* 🚀
