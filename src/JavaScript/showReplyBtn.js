const showReplyBtn = document.querySelector('.show-reply-btn');

const content = document.querySelector('.replies');



showReplyBtn.addEventListener('click', () => {
    content.classList.toggle('.show-reply');
    if(showReplyBtn.innerText === '1 resposta') {
        showReplyBtn.innerText = 'ocultar resposta';
        content.style.display = 'block';
    } else {
        showReplyBtn.innerText = '1 resposta';
        content.style.display = 'none';
    };

});