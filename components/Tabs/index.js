// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// console.log(axios.get('https://lambda-times-backend.herokuapp.com/topics'));

const topics = document.querySelector('.topics');

function TabsContent (object) {
    object.topics.map(el =>{
        const tab = document.createElement('div');
        tab.textContent = el;
        tab.classList.add('tab');
        topics.appendChild(tab);
    })
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => TabsContent(response.data));
