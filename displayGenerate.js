document.addEventListener('DOMContentLoaded', () => {
    dishes.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

    const grids = {
        'soup': document.getElementById('soups-grid'),
        'main-dish': document.getElementById('main-dishes-grid'),
        'salad': document.getElementById('salads-grid'),
        'drink': document.getElementById('drinks-grid'),
        'dessert': document.getElementById('desserts-grid')
    };

    function createDishCard(dish) {
        const card = document.createElement('div');
        card.classList.add('dish-card');
        card.setAttribute('data-dish', dish.keyword);
        card.setAttribute('data-kind', dish.kind);
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
        const targetGrid = grids[dish.category];
        if (targetGrid) {
            const cardElement = createDishCard(dish);
            targetGrid.appendChild(cardElement);
        }
    });

    const filterContainers = document.querySelectorAll('.filters');
    filterContainers.forEach(container => {
        container.addEventListener('click', (event) => {
            const clickedBtn = event.target.closest('.filter-btn');
            if (!clickedBtn) return;

            const section = container.closest('.menu-category');
            const grid = section.querySelector('.dishes-grid');
            const allCards = grid.querySelectorAll('.dish-card');
            const allButtons = container.querySelectorAll('.filter-btn');
            const isAlreadyActive = clickedBtn.classList.contains('active');
            allButtons.forEach(btn => btn.classList.remove('active'));

            if (isAlreadyActive) {
                allCards.forEach(card => {
                    card.style.display = '';
                });
            } else {
                clickedBtn.classList.add('active');
                const selectedKind = clickedBtn.getAttribute('data-kind');
                allCards.forEach(card => {
                    if (card.getAttribute('data-kind') === selectedKind) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
});