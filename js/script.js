document.querySelector('#menu').addEventListener('click', function() {
    document.querySelector('.modal--header').classList.toggle('display');
    document.querySelector('.header--ul').classList.toggle('show');
    document.querySelector('#menu').classList.toggle('fa-close');
});

document.querySelector('.modal--header').addEventListener('click', function() {
    document.querySelector('.modal--header').classList.remove('display');
    document.querySelector('.header--ul').classList.remove('show');
    document.querySelector('#menu').classList.remove('fa-close');
})

document.querySelector('.header--ul').addEventListener('click', function(e) {
    e.stopPropagation();
})

window.addEventListener('scroll', function() {
    document.querySelector('.modal--header').classList.remove('display');
    document.querySelector('.header--ul').classList.remove('show');
    document.querySelector('#menu').classList.remove('fa-close');
})