// --- Counter ---
let count = 0;
const display = document.getElementById("count-display");

// Wire up the three buttons:
// Increment: add 1 to count and update display
// Decrement: subtract 1 and update display
// Reset: set count to 0 and update display

document.getElementById("increment-btn").addEventListener("click", () => {
  count += 1; // add 1 to the count variable
  display.textContent = count; // show the new number on screen
});

document.getElementById("decrement-btn").addEventListener("click", () => {
  count -= 1; // subtract 1 from count
  display.textContent = count; // refresh the display
});

document.getElementById("reset-btn").addEventListener("click", () => {
  count = 0; // back to zero
  display.textContent = count; // show 0 on screen
});

// --- To-Do List ---
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return; // don't add empty items

  const newItem = document.createElement("li"); // create a new list item
  newItem.textContent = text; // set its text to what the user typed
  list.appendChild(newItem); // add it to the <ul>
  input.value = ""; // clear the input field
  input.focus(); // put the cursor back in the input
});
