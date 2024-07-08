// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const recipesGrid = document.getElementById('recipes-grid');

    // Example recipes data (replace with actual API call or data source)
    const recipes = [
        {
            title: "Quinoa Salad",
            description: "A healthy and tasty quinoa salad with fresh vegetables.",
            imageUrl: "images/quinoa-salad.jpg",
            link: "https://example.com/quinoa-salad"
        },
        {
            title: "Lentil Soup",
            description: "A hearty lentil soup perfect for cold days.",
            imageUrl: "images/lentil-soup.jpg",
            link: "https://example.com/lentil-soup"
        },
        {
            title: "Vegetable Stir-Fry",
            description: "A quick and easy vegetable stir-fry with a delicious sauce.",
            imageUrl: "images/vegetable-stir-fry.jpg",
            link: "https://example.com/vegetable-stir-fry"
        },
        {
            title: "Fruit Smoothie",
            description: "A refreshing and nutritious fruit smoothie.",
            imageUrl: "images/fruit-smoothie.jpg",
            link: "https://example.com/fruit-smoothie"
        }
    ];

    // Render recipes dynamically
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.imageUrl}" alt="${recipe.title}">
            <div class="recipe-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <a href="${recipe.link}" target="_blank">View Recipe</a>
            </div>
        `;
        recipesGrid.appendChild(recipeCard);
    });
});
