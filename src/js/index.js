document.addEventListener("DOMContentLoaded", function () {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }
    // Скрипт для поиска
    if (document.querySelector('.search')) {
        const searchDesk = document.querySelector('.search');
        const searchDeskInput = searchDesk.querySelector('input');
        const openSearchBtn = document.getElementById('open-btn-search');
        const closeSearchBtn = document.getElementById('close-btn-search');
        let topMenu = document.getElementById('top-menu');


        // Скрипт для бургера
        if (document.querySelector('.burger_menu')) {
            var burgerMenu = document.querySelector('.burger_menu');
            var svgBurger = burgerMenu.querySelectorAll('svg');

            svgBurger.forEach(element => {
                element.addEventListener('click', () => {
                    toggleClass(document.querySelector('.bottom_header_container'), 'open');
                    svgBurger.forEach(el => {
                       
                        toggleClass(el, 'invise');
                    })
                })
            });
        }

        openSearchBtn.addEventListener('click', () => {
            addClass(topMenu, 'invise');
            addClass(openSearchBtn, 'invise');
            addClass(searchDesk, 'vis');
            if (burgerMenu) {
                addClass(burgerMenu, 'invise');
            }
            if (document.querySelector('.header_logo_mob')) {
                addClass(document.querySelector('.header_logo_mob'), 'invise');
            }
        })
        closeSearchBtn.addEventListener('click', () => {
            removeClass(topMenu, 'invise');
            removeClass(openSearchBtn, 'invise');
            removeClass(searchDesk, 'vis');
            if (burgerMenu) {
                removeClass(burgerMenu, 'invise');
            }
            if (document.querySelector('.header_logo_mob')) {
                removeClass(document.querySelector('.header_logo_mob'), 'invise');
            }
        })

        searchDeskInput.addEventListener('input', () => {
            if (searchDeskInput.value.length > 3) {
                addClass(searchDesk, 'open');
            } else {
                removeClass(searchDesk, 'open');
            }
        })
        searchDeskInput.addEventListener('focus', () => {
            if (searchDeskInput.value.length > 3) {
                addClass(searchDesk, 'open');
            } else {
                removeClass(searchDesk, 'open');
            }
        })
        searchDeskInput.addEventListener('blur', () => {
            setTimeout(() => {
                removeClass(searchDesk, 'open');
            }, 500);

        })
    }

});