// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const donatesGrid = document.getElementById('donate-grid');

    // Example stories data (replace with actual API call)
    const donates = [
        {
            title: "Donate",
            description: "Contribute to the efforts by making a donation. Your generosity enables to provide essential resources and support to those in need.",
            imageUrl: "story1.jpg",
            link: "https://donate.wfp.org/1244/donation/single/?campaign=3812"
        },
        {
            title: "Donate",
            description: "Contribute to the efforts by making a donation. Your generosity enables to provide essential resources and support to those in need.",
            imageUrl: "story1.jpg",
            link: "https://donate.wfp.org/1244/donation/single/?campaign=3812"
        },
        {
            title: "Donate",
            description: "Contribute to the efforts by making a donation. Your generosity enables to provide essential resources and support to those in need.",
            imageUrl: "story1.jpg",
            link: "https://donate.wfp.org/1244/donation/single/?campaign=3812"
        },
        {
            title: "Donate",
            description: "Contribute to the efforts by making a donation. Your generosity enables to provide essential resources and support to those in need.",
            imageUrl: "story1.jpg",
            link: "https://donate.wfp.org/1244/donation/single/?campaign=3812"
        }
    ];

    // Render stories dynamically
    donates.forEach(donate => {
        const donateCard = document.createElement('div');
        donateCard.classList.add('donate-card');
        donateCard.innerHTML = `
            <img src="${donate.imageUrl}" alt="${donate.title}">
            <div class="donate-content">
                <h3>${donate.title}</h3>
                <p>${donate.description}</p>
                <a href="${donate.link}" target="_blank">Read More</a>
            </div>
        `;
        donatesGrid.appendChild(donateCard);
    });
});


