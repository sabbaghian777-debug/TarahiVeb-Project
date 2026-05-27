var $ = document;
var keys = $.querySelectorAll('td');
var enter = $.getElementById('enter');
var display = $.getElementById('display');
var capsLock = $.getElementById('caps-lock');
var backSpace = $.getElementById('back-space');
var char = '' , count;
keys.forEach(key => {
    key.addEventListener('click' , event => {
        char = event.target.textContent;
        display.append(char);
    });
});
backSpace.addEventListener('click' , () => {
    display.innerText = display.innerText.substr(0 , display.innerText.length - 1);
});
backSpace.addEventListener('contextmenu' , event => {
    event.preventDefault();
    display.innerHTML = '';
});
enter.addEventListener('click' , () => {display.innerHTML += '<br>'});
capsLock.addEventListener('click' , () => {
    keys.forEach(key => {
        if (capsLock.classList.contains('upper')) {
            key.textContent = key.textContent.toLowerCase();
        } else {
            key.textContent = key.textContent.toUpperCase();
        }
    });
    capsLock.classList.toggle('upper');
});