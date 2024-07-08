// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const storiesGrid = document.getElementById('stories-grid');

    // Example stories data (replace with actual API call)
    const stories = [
        {
            title: "Community Garden Success",
            description: "Discover how a small town transformed vacant land into thriving community gardens, providing fresh produce to those in need.",
            imageUrl: "story1.jpg",
            link: "https://example.com/community-garden-success"
        },
        {
            title: "Feeding Families Initiative",
            description: "Learn about an initiative that supports local families by distributing healthy food boxes and offering nutrition education.",
            imageUrl: "story2.jpg",
            link: "https://example.com/feeding-families-initiative"
        },
        {
            title: "Innovative Farming Techniques",
            description: "Explore how farmers are using innovative techniques to increase crop yields and support sustainable agriculture.",
            imageUrl: "story3.jpg",
            link: "https://example.com/innovative-farming-techniques"
        },
        {
            title: "Youth Empowerment in Agriculture",
            description: "Read about young leaders who are pioneering agricultural projects and empowering their communities.",
            imageUrl: "story4.jpg",
            link: "https://example.com/youth-empowerment-agriculture"
        }
    ];

    // Render stories dynamically
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.classList.add('story-card');
        storyCard.innerHTML = `
            <img src="${story.imageUrl}" alt="${story.title}">
            <div class="story-content">
                <h3>${story.title}</h3>
                <p>${story.description}</p>
                <a href="${story.link}" target="_blank">Read More</a>
            </div>
        `;
        storiesGrid.appendChild(storyCard);
    });
});


