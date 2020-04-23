

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>




console.log(axios.get('https://lambda-times-backend.herokuapp.com/topics'));


const tab = document.querySelector(".topics");

function tabsContent(object){
    object.topics.map(el => {
    const tabs = document.createElement("div");
    tabs.classList.add('tab');
    tab.appendChild(tabs)
    })
      
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => tabsContent(response.data));

