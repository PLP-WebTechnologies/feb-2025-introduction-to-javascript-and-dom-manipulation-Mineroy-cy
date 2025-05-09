// Select elements
const heading = document.getElementById('main-heading');
const changeTextBtn = document.getElementById('change-text-btn');
const toggleStyleBtn = document.getElementById('toggle-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const dynamicContent = document.getElementById('dynamic-content');

// Change heading text
changeTextBtn.addEventListener('click', () => {
  heading.textContent = 'Heading Text Changed!';
});

// Toggle highlight class on heading
toggleStyleBtn.addEventListener('click', () => {
  heading.classList.toggle('highlight');
});

// Add a new dynamic box
addElementBtn.addEventListener('click', () => {
  const newBox = document.createElement('div');
  newBox.className = 'dynamic-box';
  newBox.textContent = 'This is a new dynamic box.';
  dynamicContent.appendChild(newBox);
});

// Remove the last dynamic box
removeElementBtn.addEventListener('click', () => {
  const boxes = dynamicContent.getElementsByClassName('dynamic-box');
  if (boxes.length > 0) {
    dynamicContent.removeChild(boxes[boxes.length - 1]);
  }
});
