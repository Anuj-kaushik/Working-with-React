# Background Color Changer Project - Beginner's Guide

## 🚀 Introduction
Imagine you want to create a simple yet interactive web application where users can change the background color of the page by clicking on buttons. This project will introduce you to fundamental React concepts like **state management, event handling, and dynamic class manipulation**.

---

## 🌱 Step 1: Understanding the Core Idea
Before jumping into coding, let's break down the problem:
- We need a set of buttons with different colors.
- Clicking a button should change the background color of the page.
- The app should be simple and responsive.

At its core, this project revolves around **state changes** and **event handling**.

---

## 🔧 Step 2: Setting Up the Project

**NOTE: This is the optimised approach**
1. **Create a React App** (if you don’t have one already):
   ```bash
   npx create-react-app bg-changer
   cd bg-changer
   npm start
   ```
2. **Open `src/App.js` and remove unnecessary code** to keep it clean.
3. **Create a new component**: `BgChanger.js` to manage the background-changing logic.

---

## 🎨 Step 3: Planning the UI
Think of how the user will interact with the application:
- A title to indicate the purpose.
- A container for buttons.
- Each button represents a color and changes the background when clicked.

**Tech to Use:**
- Tailwind CSS for styling.
- React’s `useState` hook to manage background changes.

---

## 🏗 Step 4: Implementing the Basic Structure
In `BgChanger.js`:
1. Import React and `useState`.
2. Define a state variable to store the current background color.
3. Create a function to handle button clicks and update the state.
4. Render the UI with buttons for different colors.

**Basic Component Code:**
```jsx
import React, { useState } from "react";

const BgChanger = () => {
  const [bg, setBg] = useState("bg-zinc-900");

  const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    white: "bg-white",
  };

  const handleClick = (e) => {
    const getId = e.target.id;
    if (colorMap[getId]) {
      setBg(colorMap[getId]);
    }
  };

  return (
    <div className={bg}>
      <div className="min-h-screen flex flex-col justify-between items-center p-5">
        <h1 className="text-6xl font-bold text-zinc-800">
          Background Color Changer
        </h1>
        <div className="bg-zinc-800 flex justify-between gap-3 px-3 py-2 rounded-lg font-semibold">
          {Object.keys(colorMap).map((color) => (
            <button
              key={color}
              id={color}
              onClick={handleClick}
              className={`${colorMap[color]} px-4 py-2 rounded-lg`}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
```

---

## 🛠 Step 5: Understanding the Logic
### **1. State Management (`useState`)**
- We use `useState("bg-zinc-900")` to create a **state variable** `bg` that holds the current background color.
- `setBg(newColor)` updates the state when a button is clicked, triggering a **re-render** of the component.

### **2. Event Handling (`handleClick`)**
- When a button is clicked, `handleClick` is called with `e` (the event object).
- `e.target.id` retrieves the `id` of the clicked button.
- We check if the `id` exists in our `colorMap` object.
- If it does, we update the background state using `setBg(colorMap[getId])`, changing the applied CSS class dynamically.

### **3. Dynamic Class Application (`className`)**
- Instead of hardcoding styles, we bind the background state to the `className` attribute in the main `div`.
- This ensures that whenever `bg` updates, the new Tailwind class is applied instantly.

### **4. Mapping Colors Efficiently**
- Instead of multiple `if-else` conditions, we use an object `colorMap`.
- `Object.keys(colorMap).map(...)` dynamically generates buttons from the object keys, making the code more **scalable and maintainable**.

---

## 🚀 Step 6: Making It More Scalable
Instead of using multiple `if-else` statements, we use an **object (`colorMap`)** to store color mappings. This makes it easy to add or remove colors without modifying `handleClick` logic.

---

## 🎯 Step 7: Enhancements
- **Add More Colors** by extending `colorMap`.
- **Animations & Transitions** using Tailwind’s `transition` classes.
- **Store Last Selected Color** in `localStorage` so the user’s choice is remembered.

---

## ✅ Conclusion
This project introduces beginners to:
- **State Management** using `useState`.
- **Event Handling** in React.
- **Dynamic Class Handling** using Tailwind.
- **Efficient Coding Practices** like object mapping.

From a simple idea, we built an interactive and scalable project! 🎨✨

