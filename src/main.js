// **QUERY SELECTORS**

//POSTER ELEMENTS

var posterImage = document.querySelector('#random-poster-image')
var posterTitle = document.querySelector('h1')
var posterQuote = document.querySelector('#random-quote')
var randomPosterButton = document.querySelector('#random-poster-button')

//HTML SECTIONS

var makeYourOwnPosterSection = document.querySelector('#poster-form')
var mainPosterSection = document.querySelector('#main-poster')
var savedPostersSection = document.querySelector('#saved-posters')
var savedPostersGrid = document.querySelector('.saved-posters-grid') 

//HTML BUTTONS

var makeYourOwnPosterButton = document.querySelector('#show-form')
var takeMeBackButton = document.querySelector('#take-me-back')
var savedPostersButton = document.querySelector('#show-saved')
var backToMain = document.querySelector('#back-to-main')
var showUserPosterButton = document.querySelector('#show-user-poster-button')
var saveThisPosterButton = document.querySelector('#save-poster-button') 

//INPUTS

var urlInput = document.querySelector('#poster-image-url')
var titleInput = document.querySelector('#poster-title')
var quoteInput = document.querySelector('#poster-quote')

//ASSETS

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var alts = [
  "bees",
  "bridge", 
  "butterfly",
  "cliff",
  "elephant",
  "flock",
  "fox",
  "frog",
  "horse",
  "lion",
  "mountain",
  "pier",
  "puffins",
  "pug",
  "runner",
  "squirrel",
  "tiger",
  "turtle"
]
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// **EVENT LISTENERS**

document.addEventListener('DOMContentLoaded', generateRandomPoster)
randomPosterButton.addEventListener('click', showAnotherRandomPoster)
makeYourOwnPosterButton.addEventListener('click', showMakeYourOwnPosterForm)
takeMeBackButton.addEventListener('click', returnToMainPage)
savedPostersButton.addEventListener('click', showSavedPostersSection)
backToMain.addEventListener('click', returnToMainPage)
showUserPosterButton.addEventListener('click', createDisplayAndStoreNewPoster)
saveThisPosterButton.addEventListener('click', savePoster)

// **FUNCTIONS AND EVENT HANDLERS**

//POSTER CREATION AND LOADING FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageObject, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageObject.imageURL, 
    alt: imageObject.alt,
    title: title, 
    quote: quote}
}

function loadPoster(poster) {
  posterImage.src = poster.imageURL;
  posterImage.alt = poster.alt;
  posterTitle.innerText = poster.title;
  posterQuote.innerText = poster.quote;
}

function generateRandomPoster() {
  var randomImageIndex = getRandomIndex(images)
  var randomTitleIndex = getRandomIndex(titles)
  var randomQuoteIndex = getRandomIndex(quotes)

  var imageObject = {
    imageURL: images[randomImageIndex],
    alt: alts[randomImageIndex]
  }
  var title = titles[randomTitleIndex]
  var quote = quotes[randomQuoteIndex]
  
  currentPoster = createPoster(imageObject, title, quote);
  
  loadPoster(currentPoster)
}

function showAnotherRandomPoster() {
  generateRandomPoster()
}

//FUNCTIONS TO ADD/REMOVE HIDDEN STYLE
function showMakeYourOwnPosterForm() {
  mainPosterSection.classList.add('hidden')
  makeYourOwnPosterSection.classList.remove('hidden')
}

function returnToMainPage() {
  makeYourOwnPosterSection.classList.add('hidden')
  savedPostersSection.classList.add('hidden')
  mainPosterSection.classList.remove('hidden')
}

function showSavedPostersSection() {
  savedPostersSection.classList.remove('hidden')
  mainPosterSection.classList.add('hidden')
}

//FUNCTIONS TO CREATE NEW POSTERS
function createDisplayAndStoreNewPoster(event) {
  event.preventDefault()
  storeUserInputInArrays()
  createUserPoster(urlInput.value, titleInput.value, quoteInput.value)
  returnToMainPage()
  loadPoster(currentPoster)
  resetForm()
}

function storeUserInputInArrays() {
  var userUrl = urlInput.value
  var userAlt = 'User uploaded image'
  var userTitle = titleInput.value
  var userQuote = quoteInput.value

  images.push(userUrl)
  alts.push(userAlt)
  titles.push(userTitle)
  quotes.push(userQuote)
}

function createUserPoster(userUrl, userTitle, userQuote) {
  currentPoster = createPoster({
    imageURL: userUrl,
    alt: 'User uploaded image' },
    userTitle,
    userQuote)
}

function resetForm(event) {
  urlInput.value = ''
  titleInput.value = ''
  quoteInput.value = ''
}

//FUNCTIONS TO SAVE POSTERS

function savePoster() {
  addCurrentPosterToSavedPostersArray()
  showSavedPostersSection()
  loadCurrentPosterToSavedPostersPage()
}

function addCurrentPosterToSavedPostersArray() {
  savedPosters.push(currentPoster)
}

function loadCurrentPosterToSavedPostersPage() {
  savedPostersGrid.innerHTML += `
  <div class="mini-poster">
    <img src="${currentPoster.imageURL}" alt="${currentPoster.alt}" class="mini-poster img">
    <h2>${currentPoster.title}</h1>
    <h4>${currentPoster.quote}</h3>
  `
}