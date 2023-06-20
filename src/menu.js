import createElement from './createElement.js';
import foodData from './food.csv';


export default function createContent() {
    const title = createElement('h4', 'An out-of-this-world menu', 'title', null);

    const textPrice = "How do we keep our prices so low? The secret is that we manufacture everything we need locally, and only import the rest from Earth. Don't believe us? Just look below!";
    const lowPrices = createElement('p', textPrice);

    const contentContainer = document.getElementById('content-container');
    contentContainer.appendChild(title);
    contentContainer.appendChild(lowPrices);

    function importAll(r) {         // This function maps an input url to a webpacked id url
        let images = {}
        r.keys().forEach((item) => images[item] = r(item))
        return images;              // it then returns an object with key-value pairs of the matchings
    }

    const foodImages = importAll(require.context('./food/', false, /\.jpg$/i));

    foodData.forEach((food) => {
        const foodBox = createElement('div', null, 'food-box');
        
        const foodImg = document.createElement('img');
        foodImg.setAttribute('src', foodImages[food.image_url]);   // we get the webpack id by looking it up in the object
        foodImg.alt = food.food_name;
        foodBox.appendChild(foodImg);

        const foodDescription = createElement('div', null, 'food-description');
        const foodName = createElement('h4', food.food_name, 'food-name');
        const foodPrice = createElement('h5', food.food_price, 'food-price');
        foodDescription.appendChild(foodName);
        foodDescription.appendChild(foodPrice);

        foodBox.appendChild(foodDescription);
        
        contentContainer.appendChild(foodBox);
    });
}