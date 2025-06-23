// const left = document.getElementsByClassName('left-split')
// const right = document.getElementsByClassName('right-split')
// const container = document.getElementsByClassName('container')

// left.addEventListener('mouseenter', () => container.classList.add('left-hover'));
// left.addEventListener('mouseleave', () => container.classList.remove('left-hover'));

// right.addEventListener('mouseenter', () => container.classList.add('right-hover'));
// right.addEventListener('mouseleave', () => container.classList.remove('right-hover'));


const left = document.getElementsByClassName('left-split')[0]; // Get the first element with class 'left-split'
const right = document.getElementsByClassName('right-split')[0]; // Get the first element with class 'right-split'
const container = document.getElementsByClassName('container')[0]; // Get the first element with class 'container'

// Add event listeners for the left-split element
left.addEventListener('mouseenter', () => {
  container.classList.add('left-hover');
});
left.addEventListener('mouseleave', () => {
  container.classList.remove('left-hover');
});

// Add event listeners for the right-split element
right.addEventListener('mouseenter', () => {
  container.classList.add('right-hover');
});
right.addEventListener('mouseleave', () => {
  container.classList.remove('right-hover');
});
