document.querySelector('.arrow-btn').addEventListener('click', function() {
    document.querySelector('.arrow-btn').classList.toggle('active');
    document.querySelector('.list_filters').classList.toggle('active');
    document.querySelector('.arrow-btn_second').classList.toggle('active');
})

document.querySelector('.arrow-btn_second').addEventListener('click', function() {
    document.querySelector('.arrow-btn_second').classList.toggle('active');
    document.querySelector('.list_filters').classList.toggle('active');
    document.querySelector('.arrow-btn').classList.toggle('active');
})