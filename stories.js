 
document.addEventListener('DOMContentLoaded', () => {
    const storiesGrid = document.getElementById('stories-grid');

    // Example stories data (replace with actual API call)
    const stories = [
        {
            title: "Cyclone Mocha Recovery in Myanmar",
            description: "In the aftermath of Cyclone Mocha, which affected 1.9 million people, local volunteers, supported by the UNDP, led recovery efforts, helping communities rebuild their lives and ensuring food security during the crisis.",
            imageUrl: "story1.jpg",
            link: "https://www.unv.org/sustainable-development-goal/sdg-2-zero-hunger"
        },
        {
            title: "Food Insecurity in Zambia",
            description: "In Zambia, the UN and local organizations have been working with smallholder farmers to tackle food insecurity. Through partnerships and sustainable agricultural practices, these efforts aim to improve the food supply and livelihoods of rural populations​.",
            imageUrl: "story2.jpg",
            link: "https://www.unv.org/sustainable-development-goal/sdg-2-zero-hunger"
        },
        {
            title: "UN Volunteers in Iraq",
            description: "In Iraq’s Duhok Governorate, UN Volunteers collaborated with local authorities to reform the Public Distribution System, ensuring that vulnerable families receive essential food supplies efficiently.​",
            imageUrl: "story3.jpg",
            link: "https://www.unv.org/sustainable-development-goal/sdg-2-zero-hunger"
        },
        {
            title: "RESIGUI Project in Guinea",
            description: "This project, funded by the European Union, provided cash transfers and nutritional support to 20,000 households in Guinea. It also helped communities with agricultural activities, contributing to food security and economic stability​.",
            imageUrl: "story4.jpg",
            link: "https://www.unv.org/sustainable-development-goal/sdg-2-zero-hunger"
        },

    ];

    // Render stories dynamically
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.classList.add('story-card');
        storyCard.innerHTML = `
            <div class="story-content">
                <h3>${story.title}</h3>
                <p>${story.description}</p>
                <a href="${story.link}" target="_blank">Read More</a> 
            </div>
        `;
        storiesGrid.appendChild(storyCard);
    });
});


