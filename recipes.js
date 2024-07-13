// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const recipesGrid = document.getElementById('recipes-grid');

    // Example recipes data (replace with actual API call or data source)
    const recipes = [
        {
            title: "UN food recipes",
            description: "UN Food challenges of sustainable recipes use.",
            imageUrl: "images/vegetable-stir-fry.jpg",
            link: "https://www.un.org/sustainabledevelopment/actnow-food-challenge/"
        },
        {
            title: "Love food hate waste",
            description: "Learn to cook without wasting food.",
            imageUrl: "images/quinoa-salad.jpg",
            link: "https://www.lovefoodhatewaste.com/"
        },
        {
            title: "Cook For Good",
            description: "Free classes healthy and thrifty cooking .",
            imageUrl: "images/lentil-soup.jpg",
            link: "https://cookforgood.com/"
        },
        {
            title: "Chickpea and Spinach Curry",
            description: "A flavorful curry featuring chickpeas and spinach, which are both nutrient-dense and support sustainable agriculture.",
            imageUrl: "images/fruit-smoothie.jpg",
            link: "https://www.youtube.com/watch?v=wsvfA0YOLUs"
        }
    ];

    // Render recipes dynamically
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <div class="recipe-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <a href="${recipe.link}" target="_blank">View </a>
            </div>
        `;
        recipesGrid.appendChild(recipeCard);
    });
});
