// 화면 옆으로 축소했을 때만 작동함

const toggleBtn = document.querySelector('.menu-toggle-btn');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
});
