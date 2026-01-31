const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav');
const container = document.querySelector('#temples-container');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.textContent = navigation.classList.contains('open') ? '✖' : '☰';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Kinshasa DRC",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl: "https://www.churchofjesuschrist.org/media/image/your-chosen-photo-file-here.jpg?lang=eng"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bacolod Philippines",
        location: "Bacolod, Philippines",
        dedicated: "2026, May, 31",
        area: 26700,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Bacolod-Philippines-Temple-Rendering.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
];

function displayTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement('figure');
        card.classList.add('temple-card');

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        container.appendChild(card);
    });
}

displayTemples(temples);

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const filter = link.dataset.filter;

        let filtered = temples;

        if (filter === "old") {
            filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
        } else if (filter === "new") {
            filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
        } else if (filter === "large") {
            filtered = temples.filter(t => t.area > 90000);
        } else if (filter === "small") {
            filtered = temples.filter(t => t.area < 10000);
        }

        displayTemples(filtered);
    });
});

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;