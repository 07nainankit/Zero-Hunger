// volunteerlist.js

document.addEventListener('DOMContentLoaded', () => {
    const volunteerGrid = document.getElementById('volunteer-grid');

    // Example volunteer opportunities data (replace with actual API call or data source)
    const volunteerOpportunities = [
        {
            title: "World Food Programme",
            description: "Volunteer with WFP and help us achieve Zero Hunger.",
            imageUrl: "/images/food-bank.jpg",
            link: "https://www.wfp.org/careers/volunteers#:~:text=Volunteer%20with%20WFP%20and%20help,organization%20in%20different%20functional%20areas."
        },
        {
            title: "Volunteer World",
            description: "Join Volunteer World and support Zero Hunger goal.",
            imageUrl: "/images/food-bank.jpg",
            link: "https://www.volunteerworld.com/en/volunteer-abroad/goal-2-zero-hunger"
        },
        {
            title: "Thuvakkam Zero Hunger Drive",
            description: "Sponsor the food for needy people by Zero Hunger Drive.",
            imageUrl: "/images/community-garden.jpg",
            link: "https://thuvakkam.org/zero-hunger-drive/"
        },
        {
            title: "Best Zero Hunger Organizations",
            description: "Visit and explore various top organizations that work for Zero hunger goal.",
            imageUrl: "/images/nutrition-workshop.jpg",
            link: "https://www.goodera.com/blog/zero-hunger-organizations"
        }
    ];

    // Render volunteer opportunities dynamically
    volunteerOpportunities.forEach(volunteer => {
        const volunteerCard = document.createElement('div');
        volunteerCard.classList.add('volunteer-card');
        volunteerCard.innerHTML = `
            <div class="volunteer-content">
                <h3>${volunteer.title}</h3>
                <p>${volunteer.description}</p>
                <a href="${volunteer.link}" target="_blank">Learn More</a>
            </div>
        `;
        volunteerGrid.appendChild(volunteerCard);
    });
});
