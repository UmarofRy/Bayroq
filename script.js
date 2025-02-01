
let inp = document.querySelector('input');
let head = document.querySelector('header');
let div = document.querySelector('div');
let btn = document.querySelector('button');

let Api = "https://restcountries.com/v3.1/all";
fetch(Api)
.then(res => res.json())
.then(data => {
    for (item of data) {
        div.innerHTML += `
            <div class="box2">
                <img class="img" src="${item.flags.png}" alt="flag">
                <p>${item.name.common}</p>
            </div>
        `;
    }
});


btn.addEventListener('click', () => {
    head.classList.toggle('dark');
    btn.classList.toggle('dark');
    inp.classList.toggle('dark');
    document.body.classList.toggle('dark');
    if (btn.innerText === "Dark Mode") {
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
});

inp.addEventListener('input', (e) => { 
    let value = e.target.value.toLowerCase();
    let box = document.querySelectorAll('.box2');
    for (item of box) {
        if (item.innerText.toLowerCase().includes(value)) {
            item.style.display = "block";
        } else {
        }
            item.style.display = "none";
    }
});


