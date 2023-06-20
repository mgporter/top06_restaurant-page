import createElement from './createElement.js';
import picMoon from './moon.png';

const hoursOfOperation = {
    'Full moon': 'Open all day',
    'Waning gibbous': '8am - 10pm',
    'Last quarter': '10am - 8pm',
    'Waning crescent': '12pm - 6pm',
    'New moon': 'Definitely closed',
    'Weekends': '10pm - 4am',
}

export default function createContent() {
    
    const subtitle = createElement('h4', 'Welcome to the', 'left-align', 'subtitle')
    const mainTitle = createElement('h1', 'Crater Cafe', 'left-align', 'main-title')
    
    const testimonialText = '8 out of 10 guests who survive the trip back to Earth say it was worth it!'
    const testimonial = createElement('p', testimonialText, null, 'testimonial')
    
    const location = createElement('div', null, null, 'location')

        const locationImg = document.createElement('img')
        locationImg.src = picMoon;
        locationImg.alt = 'The Moon';

        const locationText = document.createElement('p');
        locationText.textContent = "Conveniently located in Jacob's crater, just 102.6km from the nearest launch site. Get there by foot, buggy, or moonworm*!";

    location.appendChild(locationImg)
    location.appendChild(locationText)

    const hoursTable = document.createElement('table');
    hoursTable.id = 'hours-table';

        const tableCaption = document.createElement('caption');
        tableCaption.textContent = 'Hours of operation'

    for (let time in hoursOfOperation) {
        const row = document.createElement('tr');

        const left = document.createElement('td');
        left.textContent = time;

        const right = document.createElement('td');
        right.textContent = hoursOfOperation[time];

        row.appendChild(left);
        row.appendChild(right);
        hoursTable.appendChild(row);
    }

    const disclaimer = document.createElement('p');
    disclaimer.classList.add('disclaimer')
    disclaimer.textContent = '*Crater Cafe not responsible for moonworm-related casualties.';

    const contentContainer = document.getElementById('content-container');
    contentContainer.appendChild(subtitle);
    contentContainer.appendChild(mainTitle);
    contentContainer.appendChild(testimonial);
    contentContainer.appendChild(location);
    contentContainer.appendChild(hoursTable);
    contentContainer.appendChild(disclaimer);

}