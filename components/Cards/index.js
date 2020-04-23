// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


// console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'))

// 
const cardsContainer = document.querySelector(".cards-container");

let articleCreator = (article) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent=`${article.headline}`;

    const author = document.createElement("div");
    author.classList.add("author");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const image = document.createElement('img');
    image.src= `${article.authorPhoto}`;

    const span = document.createElement("span");
    span.textContent = `${article.authorName}`;

    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(span)


    return card;

}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    const articleCards = response.data.articles;
    for (const property in articleCards) {
      const articleList = articleCards[property];
      articleList.map(article => articleCreator(article));
    }
  });

