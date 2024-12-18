// **QUERY SELECTORS**

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
  "bees landing on ledge",
  "bridge across body of water at night", 
  "red, white, and black butterfly sitting on green leaf",
  "person standing on rock protruding over cliff",
  "two elephants walking towards camera",
  "flock of birds flying across yellow, orange, purple, and blue sky",
  "young fox walking through green grass",
  "frog",
  "brightly colored tree frog on a green leaf",
  "lion roaring while laying in field of grass",
  "view of person's back while looking at mountains",
  "steps down to pier surrounded by purple flowers",
  "two puffins",
  "pug wrapped in a blanket",
  "person running up mountain road",
  "squirrel looking down into camera from tree trunk",
  "tiger lounging on a rock",
  "sea turtle swimming"
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
var unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];
var unmotivationalAlts = [ 
  "man standing on road in forest", "two dark polaroids", "rain drops on glass", "looking up at airplane from bottom of dark building", "escape key on keyboard", "hopelessness spelled out with scrabble pieces", "bottom of well", "seashell", "looking up from bottom of well", "man screaming  in crumbling room", "shadow figure", "crumbling pier", "crumbling building", "electrical tower in fog", "doubt sticker on metal pipe"
]

//POSTER ELEMENTS

var posterImage = document.querySelector('#random-poster-image')
var posterTitle = document.querySelector('h1')
var posterQuote = document.querySelector('#random-quote')

//HTML SECTIONS

var makeYourOwnPosterSection = document.querySelector('#poster-form')
var mainPosterSection = document.querySelector('#main-poster')
var savedPostersSection = document.querySelector('#saved-posters')
var savedPostersGrid = document.querySelector('.saved-posters-grid') 
var unmotivationalPostersSection = document.querySelector('.unmotivational-posters-section')
var unmotivationalPostersFlexbox = document.querySelector('.unmotivational-posters-flexbox')

//HTML BUTTONS

var makeYourOwnPosterButton = document.querySelector('#show-form')
var takeMeBackButton = document.querySelector('#back-to-main-create')
var savedPostersButton = document.querySelector('#show-saved')
var backToMain = document.querySelector('#back-to-main-saved')
var showUserPosterButton = document.querySelector('#show-user-poster-button')
var saveThisPosterButton = document.querySelector('#save-poster-button') 
var unmotivationalButton = document.querySelector('#unmotivational-button')
var backToMainUnmotivational = document.querySelector('#back-to-main-unmotivational')
var randomPosterButton = document.querySelector('#random-poster-button')

//INPUTS

var urlInput = document.querySelector('#poster-image-url')
var titleInput = document.querySelector('#poster-title')
var quoteInput = document.querySelector('#poster-quote')

//OTHER 
var savedPosters = [];
var currentPoster;

// ------------------------------------------------------------------- //

// **EVENT LISTENERS**

//LOADING 
document.addEventListener('DOMContentLoaded', generateRandomPoster)

//MAIN PAGE NAVIGATION BUTTONS
saveThisPosterButton.addEventListener('click', savePoster)
savedPostersButton.addEventListener('click', () => {
  showAndHideSections(savedPostersSection, mainPosterSection)
})
randomPosterButton.addEventListener('click', showAnotherRandomPoster)
makeYourOwnPosterButton.addEventListener('click', () => {
  showAndHideSections(makeYourOwnPosterSection, mainPosterSection)
})
unmotivationalButton.addEventListener('click', displayUnmotivationalPosters)

//NAVIGATION WITHIN OTHER PAGES
backToMain.addEventListener('click', () => {
  showAndHideSections(mainPosterSection, savedPostersSection)
})
takeMeBackButton.addEventListener('click', () => {
  showAndHideSections(mainPosterSection, makeYourOwnPosterSection)
})
showUserPosterButton.addEventListener('click', createDisplayAndStoreNewPoster)
backToMainUnmotivational.addEventListener('click', () => {
  showAndHideSections(mainPosterSection, unmotivationalPostersSection)
})

//DELETE POSTERS
unmotivationalPostersFlexbox.addEventListener('dblclick', deletePoster)

// ------------------------------------------------------------------- //

// **FUNCTIONS AND EVENT HANDLERS**

//POSTER CREATION AND LOADING FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL,
    title: title, 
    quote: quote}
}

function loadPoster(poster) {
  posterImage.src = poster.imageURL;
  posterImage.alt = currentPoster.alt;
  posterTitle.innerText = poster.title;
  posterQuote.innerText = poster.quote;
}

function generateRandomPoster() {
  var randomImageIndex = getRandomIndex(images)
  var randomTitleIndex = getRandomIndex(titles)
  var randomQuoteIndex = getRandomIndex(quotes)

  var title = titles[randomTitleIndex]
  var quote = quotes[randomQuoteIndex]
  var imageURL = images[randomImageIndex]
  
  currentPoster = createPoster(imageURL, title, quote);
  currentPoster.alt = alts[randomImageIndex]
  
  loadPoster(currentPoster)
}

function showAnotherRandomPoster() {
  generateRandomPoster()
}

//FUNCTIONS TO ADD/REMOVE HIDDEN STYLE
function showAndHideSections(section1, section2) {
  section1.classList.remove('hidden') 
  section2.classList.add('hidden')
}

//FUNCTIONS TO CREATE NEW POSTERS
function createDisplayAndStoreNewPoster(event) {
  event.preventDefault()
  storeUserInputInArrays()
  currentPoster = createPoster(urlInput.value, titleInput.value, quoteInput.value)
  currentPoster.alt = 'User uploaded image'
  loadPoster(currentPoster)
  showAndHideSections(mainPosterSection, makeYourOwnPosterSection)
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

function resetForm(event) {
  urlInput.value = ''
  titleInput.value = ''
  quoteInput.value = ''
}

//FUNCTIONS TO SAVE POSTERS

function savePoster() {
  addCurrentPosterToSavedPostersArray()
  showAndHideSections(savedPostersSection, mainPosterSection)
}

function addCurrentPosterToSavedPostersArray() {
  if (!savedPosters.some(poster =>
    poster.imageURL === currentPoster.imageURL &&
    poster.title === currentPoster.title &&
    poster.quote === currentPoster.quote)) 
    {
  savedPosters.push(currentPoster)

  var savedPosterIndex = findSavedPosterIndex(savedPosters)

  loadCurrentPosterToSavedPostersPage(savedPosterIndex)
    }
}

function findSavedPosterIndex(savedPosters) {
  return savedPosters.findIndex(poster =>
    poster.imageURL === currentPoster.imageURL &&
    poster.title === currentPoster.title &&
    poster.quote === currentPoster.quote
  )
}

function loadCurrentPosterToSavedPostersPage(savedPosterIndex) {
  savedPostersGrid.innerHTML += `
  <div class="mini-poster">
    <img src="${savedPosters[savedPosterIndex].imageURL}" alt="${savedPosters[savedPosterIndex].alt || ''}" class="mini-poster img">
    <h2>${savedPosters[savedPosterIndex].title}</h2>
    <h4>${savedPosters[savedPosterIndex].quote}</h4>
  `
}

//UNMOTIVATIONAL POSTERS FUNCTIONS

function cleanData(unmotivationalPosters) {
  var newArray = []

  unmotivationalPosters.forEach((poster, index) => {
    var newPoster = createPoster(poster.img_url, poster.name, poster.description)
    newPoster.alt = unmotivationalAlts[index]
    newPoster.id = index
    newArray.push(newPoster)
  })
  return newArray
}

function displayUnmotivationalPosters() {
  var cleanedData = cleanData(unmotivationalPosters)
  unmotivationalPostersFlexbox.innerHTML = ''

  cleanedData.forEach((poster) => {
    unmotivationalPostersFlexbox.innerHTML += `
  <div class="mini-poster unmotivational-poster" id="${poster.id}">
    <img src="${poster.imageURL}" alt="${poster.alt}" class="img">
    <h2 class=>${poster.title}</h2>
    <h4 class=>${poster.quote}</h4>
  </div>
  `

  showAndHideSections(unmotivationalPostersSection, mainPosterSection)
  })
} 

function deletePoster(event) {
  var posterElement = event.target.closest('.unmotivational-poster')

  if (posterElement) {
    var posterId = Number(posterElement.id)

    posterElement.remove()
    unmotivationalPosters.splice(posterId, 1)
  }
}
