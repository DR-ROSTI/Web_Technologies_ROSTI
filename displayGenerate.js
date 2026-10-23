document.addEventListener('DOMContentLoaded', () => {
    dishes.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    const soupsGrid = document.getElementById('soups-grid');
    const mainDishesGrid = document.getElementById('main-dishes-grid');
    const drinksGrid = document.getElementById('drinks-grid');

    function createDishCard(dish) {
        const card = document.createElement('div');
        card.classList.add('dish-card');
        card.setAttribute('data-dish', dish.keyword);
        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <p class="price">${dish.price} ₽</p>
            <p class="name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button type="button">Добавить</button>
        `;
        return card;
    }

    dishes.forEach((dish) => {
        const cardElement = createDishCard(dish);
        if (dish.category === 'soup' && soupsGrid) {
            soupsGrid.appendChild(cardElement);
        } else if (dish.category === 'main-dish' && mainDishesGrid) {
            mainDishesGrid.appendChild(cardElement);
        } else if (dish.category === 'drink' && drinksGrid) {
            drinksGrid.appendChild(cardElement);
        }
    });
});