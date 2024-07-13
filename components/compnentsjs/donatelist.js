// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const donatesGrid = document.getElementById('donate-grid');

    // Example stories data (replace with actual API call)
    const donates = [
        {
            title: "UN SDG Fund",
            description: "Support various sustainable development goals.",
            imageUrl: "story1.jpg",
            link: "https://www.globalgiving.org/projects/zero-hunger/donate/"
        },
        {
            title: "World Food Programme",
            description: "Contribute to the efforts by making a donation. Your generosity enables to provide essential resources and support to those in need.",
            imageUrl: "story1.jpg",
            link: "https://donate.wfp.org/1244/donation/single/?campaign=3812"
        },
        {
            title: "Child Help Foundation - India",
            description: "Ensure food security for under privileged .",
            imageUrl: "story1.jpg",
            link: "https://in.childhelpfoundation.in/index.php/Zero_Hunger"
        },
        {
            title: "Action Against Hunger",
            description: "Save Children's lives and help end hunger.",
            imageUrl: "story1.jpg",
            link: "https://www.actionagainsthunger.org/take-action/make-a-gift/"
        }
    ];

    // Render stories dynamically
    donates.forEach(donate => {
        const donateCard = document.createElement('div');
        donateCard.classList.add('donate-card');
        donateCard.innerHTML = `
            <div class="donate-content">
               <h3>${donate.title}</h3>
                <p>${donate.description}</p>
                <a href="${donate.link}" target="_blank">Donate</a>
            </div>
        `;
        donatesGrid.appendChild(donateCard);
    });
});


