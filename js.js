var btnOpen = document.querySelector('.product-information')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.close')
var btnClose = document.querySelector('.button')

function click(e) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click',click)
btnClose.addEventListener('click',click)
iconClose.addEventListener('click',click)
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        click()
    }
})