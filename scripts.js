// Get access to DOM elements
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');

const addPostButton = document.getElementById('add-post');
const articlePosition = document.querySelector('section');

// Click event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
}); 

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});

addPostButton.addEventListener('click', () =>{
  const newPost = createNewPost();
  articlePosition.appendChild(newPost);
  
});

//Page function

function createNewPost() {
  let newArticle = document.createElement('article');
  let newHeading = document.createElement('h5');
  let newParagraph = document.createElement('p');
  
  newParagraph.textContent = 'I am creating new article with add post button';
  newHeading.textContent = 'Listen for event 2';
  
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newArticle.classList.add('list-group-item');
  
  return newArticle;
}



