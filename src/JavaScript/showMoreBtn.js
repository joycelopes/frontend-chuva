const showMoreBtn = document.querySelector('.show-more-btn');

const text = document.querySelector('.summary-text');

const dots = document.getElementById('dots');




showMoreBtn.addEventListener('click', () => {
    text.classList.toggle('show-more-text');
    if(showMoreBtn.innerText === 'ver mais') {
        dots.style.display = 'none';
        showMoreBtn.innerText = 'ver menos';
    } else {
        showMoreBtn.innerText = 'ver mais';
        dots.style.display = 'inline';
    }
});
