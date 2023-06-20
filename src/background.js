// function createStar creates a SVG star and puts it in a random position, then
// the function createStarfield will attach a number of these stars to a div,
// which will then be animated across the screen. This saves cpu resources
// as opposed to animating each star separately.

const createStar = function() {

    // Create SVG. We'll randomize it's position on the screen.
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    star.setAttribute('viewBox', '0 0 100 100');
    star.setAttribute('width', '20');
    star.setAttribute('height', '20');
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Create the filter, which the GaussianBlur will attach to
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.id = 'starBlur';
    
    const blur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    blur.setAttribute('stdDeviation', '6');
    filter.appendChild(blur);
    star.appendChild(filter);

    // Create the star, which is an SVG circle, and blur it. We'll randomize it's size.
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '50%');
    circle.setAttribute('cy', '50%');
    circle.setAttribute('r', (Math.random() * 10 + 3));
    circle.style.fill = '#ffffff';
    circle.style.stroke = '#ffffff';
    circle.style.filter = 'url(#starBlur)';

    star.appendChild(circle);

    return star
}

export default function createStarBackground(starsPerDiv, divsPerPage) {
    
    function createStarField() {
        // Create a div on which to attach several stars
        const starField = document.createElement('div');
        starField.classList.add('starField');

        // Randomize this div's animation speed and starting position
        starField.style.animationDuration = `${Math.random() * 200 + 50}s`;
        starField.style.animationDelay = `-${Math.random() * 250}s`;

        // Attach the stars
        for (let i = 0; i < starsPerDiv; i++) {
            starField.appendChild(createStar());
        };

        return starField;
    }

    for (let i = 0; i < divsPerPage; i++) {
        document.body.appendChild(createStarField());
    }

}