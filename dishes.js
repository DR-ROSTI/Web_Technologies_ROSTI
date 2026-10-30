const dishes = [
    {
        keyword: 'gazpacho',
        name: 'Томатный суп Гаспачо с базиликом',
        price: 320,
        category: 'soup',
        count: '300 мл',
        image: 'images/soup1.jfif',
        kind: 'veg'
    },
    {
        keyword: 'lentil_soup',
        name: 'Традиционный чечевичный суп',
        price: 290,
        category: 'soup',
        count: '300 мл',
        image: 'images/soup2.jfif',
        kind: 'veg'
    },
    {
        keyword: 'fish_soup',
        name: 'Средиземноморский рыбный суп с морепродуктами',
        price: 390,
        category: 'soup',
        count: '350 мл',
        image: 'images/soup3.jpg',
        kind: 'fish'
    },
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский сливочный суп с лососем',
        price: 360,
        category: 'soup',
        count: '330 мл',
        image: 'images/soup4.jpg',
        kind: 'fish'
    },
    {
        keyword: 'ramen_soup',
        name: 'Сытный мясной суп Рамен',
        price: 375,
        category: 'soup',
        count: '425 мл',
        image: 'images/soup5.jpg',
        kind: 'meat'
    },
    {
        keyword: 'chicken_avgolemono',
        name: 'Греческий куриный суп Авголемоно',
        price: 330,
        category: 'soup',
        count: '350 мл',
        image: 'images/soup6.jpg',
        kind: 'meat'
    },

    {
        keyword: 'orzo_pasta',
        name: 'Паста орзо с кальмарами',
        price: 420,
        category: 'main-dish',
        count: '250 г',
        image: 'images/dish1.jpg',
        kind: 'fish'
    },
    {
        keyword: 'moussaka',
        name: 'Мусака с говядиной и баклажанами',
        price: 410,
        category: 'main-dish',
        count: '300 г',
        image: 'images/dish2.webp',
        kind: 'meat'
    },
    {
        keyword: 'chicken_souvlaki',
        name: 'Куриный сувлаки с питой',
        price: 390,
        category: 'main-dish',
        count: '280 г',
        image: 'images/dish3.webp',
        kind: 'meat'
    },
    {
        keyword: 'fish_cutlet_rice',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main-dish',
        count: '270 г',
        image: 'images/dish4.jpg',
        kind: 'fish'
    },
    {
        keyword: 'pizza_margherita',
        name: 'Итальянская пицца Маргарита',
        price: 450,
        category: 'main-dish',
        count: '470 г',
        image: 'images/dish5.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fried_potatoes_mushrooms',
        name: 'Жареный картофель с белыми грибами',
        price: 250,
        category: 'main-dish',
        count: '250 г',
        image: 'images/dish6.jpg',
        kind: 'veg'
    },

    {
        keyword: 'tuna_salad',
        name: 'Средиземноморский салат с тунцом',
        price: 480,
        category: 'salad',
        count: '250 г',
        image: 'images/salad1.jpg',
        kind: 'fish'
    },
    {
        keyword: 'caesar_chicken',
        name: 'Цезарь с цыпленком на гриле',
        price: 370,
        category: 'salad',
        count: '220 г',
        image: 'images/salad2.jpg',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Итальянский салат Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'images/salad3.jpg',
        kind: 'veg'
    },
    {
        keyword: 'greek_salad',
        name: 'Традиционный греческий салат с сыром фета',
        price: 330,
        category: 'salad',
        count: '250 г',
        image: 'images/salad4.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fries_caesar',
        name: 'Картофель фри с соусом Цезарь',
        price: 280,
        category: 'salad',
        count: '235 г',
        image: 'images/salad5.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fattuch_salad',
        name: 'Салат Фаттуш',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'images/salad6.webp',
        kind: 'veg'
    },

    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'images/juice1.webp',
        kind: 'cold'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'images/juice2.webp',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'images/juice3.webp',
        kind: 'cold'
    },
    {
        keyword: 'cappuccino',
        name: 'Классический капучино',
        price: 180,
        category: 'drink',
        count: '300 мл',
        image: 'images/drink4.jpg',
        kind: 'hot'
    },
    {
        keyword: 'green_tea',
        name: 'Зеленый чай с жасмином',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'images/drink5.jpg',
        kind: 'hot'
    },
    {
        keyword: 'black_tea',
        name: 'Черный чай с бергамотом',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'images/drink6.jpg',
        kind: 'hot'
    },

    {
        keyword: 'cheesecake',
        name: 'Классический чизкейк Нью-Йорк',
        price: 240,
        category: 'dessert',
        count: '125 г',
        image: 'images/dessert1.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 г',
        image: 'images/dessert2.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт Прага',
        price: 270,
        category: 'dessert',
        count: '140 г',
        image: 'images/dessert3.jpg',
        kind: 'small'
    },
    {
        keyword: 'baklava',
        name: 'Медовая восточная пахлава',
        price: 220,
        category: 'dessert',
        count: '300 г',
        image: 'images/dessert4.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_3',
        name: 'Пончики в глазури (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '350 г',
        image: 'images/dessert5.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_6',
        name: 'Набор пончиков в глазури (6 штук)',
        price: 650,
        category: 'dessert',
        count: '700 г',
        image: 'images/dessert6.jpg',
        kind: 'large'
    }
];