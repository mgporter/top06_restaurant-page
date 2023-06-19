import './meyer_reset.css';
import './style.css';

const createStar = function() {

    // Create SVG star
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    star.setAttribute('viewBox', '0 0 100 100')
    star.setAttribute('width', '20')
    star.setAttribute('height', '20')

    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter')
    filter.id = 'starBlur';
    
    const blur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    blur.setAttribute('stdDeviation', '6');
    filter.appendChild(blur)
    star.appendChild(filter)

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '50%')
    circle.setAttribute('cy', '50%')
    circle.setAttribute('r', (Math.random() * 10 + 3))
    circle.style.fill = '#ffffff';
    circle.style.stroke = '#ffffff';
    circle.style.filter = 'url(#starBlur)';

    star.appendChild(circle);
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    return star
}

const createStarfield = function() {
    const starField = document.createElement('div')
    starField.classList.add('starField')
    starField.style.animationDuration = `${Math.random() * 200 + 50}s`;
    starField.style.animationDelay = `-${Math.random() * 250}s`
    for (let i = 0; i < 20; i++) {
        starField.appendChild(createStar())
    }

    return starField
}

for (let i = 0; i < 10; i++) {
    document.body.appendChild(createStarfield())
}


// starField.setAttribute('width', '100vw')
// starField.setAttribute('height', '100vh')


// for (let i = 0; i < 10; i++) {
//     starField.appendChild(createStar())
// }



// for (let i = 0; i < 10; i++) {
//     document.body.appendChild(createStar())
// }