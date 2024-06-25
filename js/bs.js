const allBtn = document.getElementById('all-btn');
const trendingRestaurant = document.getElementById('tr-btn');
const dod = document.getElementById('dd-btn');
const preBookOff = document.getElementById('po-btn');

const trendingRestaurantCards = document.querySelectorAll('.tr');
const dealOfDayCards = document.querySelectorAll('.dd');
const popCards = document.querySelectorAll('.pop');

function hideAllCards() {
    trendingRestaurantCards.forEach(card => card.style.display = 'none');
    dealOfDayCards.forEach(card => card.style.display = 'none');
    popCards.forEach(card => card.style.display = 'none');
}

trendingRestaurant.addEventListener('click', function() {
    trendingRestaurant.classList.add('res-active');
    allBtn.classList.remove('res-active');
    dod.classList.remove('res-active');
    preBookOff.classList.remove('res-active');

    hideAllCards();
    trendingRestaurantCards.forEach(card => card.style.display = 'block');
});

allBtn.addEventListener('click', function() {
    trendingRestaurant.classList.remove('res-active');
    allBtn.classList.add('res-active');
    dod.classList.remove('res-active');
    preBookOff.classList.remove('res-active');

    hideAllCards();
    trendingRestaurantCards.forEach(card => card.style.display = 'block');
    dealOfDayCards.forEach(card => card.style.display = 'block');
    popCards.forEach(card => card.style.display = 'block');
});

dod.addEventListener('click', function() {
    trendingRestaurant.classList.remove('res-active');
    allBtn.classList.remove('res-active');
    dod.classList.add('res-active');
    preBookOff.classList.remove('res-active');

    hideAllCards();
    dealOfDayCards.forEach(card => card.style.display = 'block');
});

preBookOff.addEventListener('click', function() {
    trendingRestaurant.classList.remove('res-active');
    allBtn.classList.remove('res-active');
    dod.classList.remove('res-active');
    preBookOff.classList.add('res-active');

    hideAllCards();
    popCards.forEach(card => card.style.display = 'block');
});
