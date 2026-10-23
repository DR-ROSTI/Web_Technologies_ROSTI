document.addEventListener('DOMContentLoaded', () => {
    const selectedDishes = {
        'soup': null,
        'main-dish': null,
        'drink': null
    };

    const nothingSelectedText = document.getElementById('nothing-selected');
    const orderSummaryBlock = document.getElementById('order-summary');
    const soupText = document.getElementById('order-soup-text');
    const mainText = document.getElementById('order-main-text');
    const drinkText = document.getElementById('order-drink-text');
    const totalPriceText = document.getElementById('order-total-price');
    const hiddenSoup = document.getElementById('hidden-soup');
    const hiddenMain = document.getElementById('hidden-main-dish');
    const hiddenDrink = document.getElementById('hidden-drink');

    function updateOrderUI() {
        const hasAnySelection = Boolean(
            selectedDishes['soup'] || 
            selectedDishes['main-dish'] || 
            selectedDishes['drink']
        );
        if (!hasAnySelection) {
            nothingSelectedText.style.display = 'block';
            orderSummaryBlock.style.display = 'none';
            hiddenSoup.value = '';
            hiddenMain.value = '';
            hiddenDrink.value = '';
            return;
        }
        nothingSelectedText.style.display = 'none';
        orderSummaryBlock.style.display = 'flex';
        let totalCost = 0;

        if (selectedDishes['soup']) {
            soupText.textContent = `${selectedDishes['soup'].name} ${selectedDishes['soup'].price}₽`;
            hiddenSoup.value = selectedDishes['soup'].keyword;
            totalCost += selectedDishes['soup'].price;
        } else {
            soupText.textContent = 'Блюдо не выбрано';
            hiddenSoup.value = '';
        }

        if (selectedDishes['main-dish']) {
            mainText.textContent = `${selectedDishes['main-dish'].name} ${selectedDishes['main-dish'].price}₽`;
            hiddenMain.value = selectedDishes['main-dish'].keyword;
            totalCost += selectedDishes['main-dish'].price;
        } else {
            mainText.textContent = 'Блюдо не выбрано';
            hiddenMain.value = '';
        }

        if (selectedDishes['drink']) {
            drinkText.textContent = `${selectedDishes['drink'].name} ${selectedDishes['drink'].price}₽`;
            hiddenDrink.value = selectedDishes['drink'].keyword;
            totalCost += selectedDishes['drink'].price;
        } else {
            drinkText.textContent = 'Напиток не выбран';
            hiddenDrink.value = '';
        }
        totalPriceText.textContent = `${totalCost}₽`;
    }

    function selectDish(cardElement) {
        const dishKeyword = cardElement.getAttribute('data-dish');
        const dishObj = dishes.find(item => item.keyword === dishKeyword);
        if (!dishObj) return;
        selectedDishes[dishObj.category] = dishObj;

        const parentGrid = cardElement.closest('.dishes-grid');
        if (parentGrid) {
            const allCardsInCategory = parentGrid.querySelectorAll('.dish-card');
            allCardsInCategory.forEach(card => card.classList.remove('selected'));
        }
        cardElement.classList.add('selected');
        updateOrderUI();
    }

    const mainElement = document.querySelector('main');
    mainElement.addEventListener('click', (event) => {
        const card = event.target.closest('.dish-card');
        if (card) {
            selectDish(card);
        }
    });

    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('reset', () => {
        selectedDishes['soup'] = null;
        selectedDishes['main-dish'] = null;
        selectedDishes['drink'] = null;
        document.querySelectorAll('.dish-card.selected').forEach(card => {
            card.classList.remove('selected');
        });
        updateOrderUI();
    });
});