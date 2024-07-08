// volunteerlist.js

document.addEventListener('DOMContentLoaded', () => {
    const volunteerGrid = document.getElementById('volunteer-grid');

    // Example volunteer opportunities data (replace with actual API call or data source)
    const volunteerOpportunities = [
        {
            title: "Food Bank Assistant",
            description: "Help organize and distribute food at the local food bank.",
            imageUrl: "/images/food-bank.jpg",
            link: "https://example.com/food-bank-assistant"
        },
        {
            title: "Community Garden Helper",
            description: "Assist in maintaining and harvesting crops in community gardens.",
            imageUrl: "/images/community-garden.jpg",
            link: "https://example.com/community-garden-helper"
        },
        {
            title: "Meal Delivery Driver",
            description: "Deliver meals to those in need within your community.",
            imageUrl: "/images/meal-delivery.jpg",
            link: "https://example.com/meal-delivery-driver"
        },
        {
            title: "Nutrition Workshop Volunteer",
            description: "Support educational workshops on nutrition and healthy eating.",
            imageUrl: "/images/nutrition-workshop.jpg",
            link: "https://example.com/nutrition-workshop-volunteer"
        }
    ];

    // Render volunteer opportunities dynamically
    volunteerOpportunities.forEach(volunteer => {
        const volunteerCard = document.createElement('div');
        volunteerCard.classList.add('volunteer-card');
        volunteerCard.innerHTML = `
            <img src="${volunteer.imageUrl}" alt="${volunteer.title}">
            <div class="volunteer-content">
                <h3>${volunteer.title}</h3>
                <p>${volunteer.description}</p>
                <a href="${volunteer.link}" target="_blank">Learn More</a>
            </div>
        `;
        volunteerGrid.appendChild(volunteerCard);
    });
});
