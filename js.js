
const champs = ['YASUO', 'KAYN'];
const input = document.querySelector('#input');
let autocomplete = document.querySelector('.autocomplete');
let active = [];

input.addEventListener('focus', () => {
    active = champs;
    active.forEach(item => {
        let sug = document.createElement('a');
        sug.classList.add('sug');
        sug.textContent = item;
        sug.setAttribute("href", "./champs/" + sug.textContent + ".html");
        autocomplete.appendChild(sug);
    })
})

input.addEventListener('blur', () => {
    active = [];
    active.forEach(item => {
        let sug = document.createElement('a');
        sug.classList.add('sug');
        sug.textContent = item;
        sug.setAttribute("href", "./champs/" + sug.textContent + ".html");
        autocomplete.appendChild(sug);
    })
}, true)

input.addEventListener('keyup', (e) => {
    let text = e.target.value;
    text = text.toUpperCase();
    console.log(text);

    autocomplete.innerHTML = "";
    active = [];

    champs.forEach(item => {
        if(item.includes(text)) {
            active.push(item);  
        }
    })

    active.forEach(item => {
        let sug = document.createElement('a');
        sug.classList.add('sug');
        sug.textContent = item;
        sug.setAttribute("href", "./champs/" + sug.textContent + ".html");
        autocomplete.appendChild(sug);
    })
})


//
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    window.scrollBy(0,-2000);
})