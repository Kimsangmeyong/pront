'use strict'

const service_container = document.querySelector('.service_container'),
    service_list = service_container.getElementsByClassName('service_list'),
    service_header = service_container.getElementsByClassName('service_header'),
    btn = service_container.querySelector('.btn_collapseAll');

let bef = service_list[0],
    hef = service_header[0];

// service_container.addEventListener('click', function (e) {
//     let event = e.target;

//     if (event.tagName === 'P') {
//         bef.classList.add('hidden');
//         hef.textContent = hef.textContent.replace("-", "+");

//         bef = event.parentNode;
//         hef = event;

//         event.parentNode.classList.remove('hidden');
//         hef.textContent = hef.textContent.replace("+", "-");
//     }

//     if (event.className === 'btn_collapseAll') {
//         bef.classList.add('hidden');
//         hef.textContent = hef.textContent.replace("-", "+");
//     }
// });

function setbef() {
    bef.classList.add('hidden');
    bef.children[0].textContent = bef.children[0].textContent.replace('-', '+');
    // bef.children[0].textContent = `+${bef.children[0].textContent.slice(1)}`;
}


service_container.addEventListener('click', function (e) {
    const eventTaget = e.target;
    if (eventTaget.classList.contains('service_header')) {
        setbef();
        eventTaget.parentNode.classList.remove('hidden');
        eventTaget.textContent = eventTaget.textContent.replace('+', '-');

        bef = eventTaget.parentNode;
    }
});


btn.addEventListener('click', setbef);