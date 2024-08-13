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

    if (document.getElementById('top-menu') && document.querySelector('.hidden_cont')) {
        const headerMenu = document.getElementById('top-menu');
        const headerHiddenCont = document.querySelector('.hidden_cont');
        const headerHiddenCont_1 = headerHiddenCont.querySelector('.cont_1');

       

        if (document.getElementById('cont_btn_1')) {
            headerHiddenCont_1.appendChild(document.getElementById('cont_btn_1').cloneNode(true));
        }
        
        if (document.querySelector('header .top_header_contacts')) {
            headerHiddenCont_1.appendChild(document.querySelector('header .top_header_contacts').cloneNode(true));
        }

        let copyMenu = headerMenu.cloneNode(true);

        headerHiddenCont.insertBefore(copyMenu, headerHiddenCont.children[0])

        headerHiddenCont.querySelectorAll('.drop').forEach(el => {
            el.addEventListener('click', (e) => { 
                if (window.screen.width < 991) {
                    e.preventDefault();
                    toggleClass(el, 'open');
                }
             })
        })

    }

    

})