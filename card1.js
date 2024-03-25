let btn = document.getElementById('sun');
let btn2 = document.getElementById('moon');
let body = document.body;

btn.onclick = background;
function background(){
    body.classList.add('dark');
    btn.style.display = 'none';
    btn2.style.display = 'flex';
}

btn2.onclick = function () {
    body.classList.remove('dark');
    btn2.style.display = 'none';
    btn.style.display = 'flex';
}