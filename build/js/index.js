document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("cont_anons")) {
        const contAns = document.getElementById("cont_anons");
        const cardAns = contAns.querySelector(".hidd_card");
        const btnOpenAllText = contAns.querySelector("#all-open");
        const btnCloseAllText = contAns.querySelector("#all-close");

        btnOpenAllText.addEventListener('click', () => {

            toggleClass(btnOpenAllText, 'invise');
            toggleClass(btnCloseAllText, 'invise');
            toggleClass(cardAns, 'invise');
        })
        btnCloseAllText.addEventListener('click', () => {
            toggleClass(btnOpenAllText, 'invise');
            toggleClass(btnCloseAllText, 'invise');
            toggleClass(cardAns, 'invise');
        })
    }

    $('[data-fancybox]').fancybox({
        helpers     : {
            overlay : {
                closeClick: true
            }
        },

    });

    jQuery(($) => {
        $('.select').on('click', '.select__head', function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next().fadeOut();
            } else {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
                $(this).addClass('open');
                $(this).next().fadeIn();
            }
        });

        $('.select').on('click', '.select__item', function () {
            $('.select__head').removeClass('open');
            $(this).parent().fadeOut();
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function (e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
    });

    $(function () {
        $('input[type="text"]').keyup(function () {
            sergey = $(this).val().toLowerCase(), spout = 'http,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
            for (litvinov = 0; litvinov < spout.length; litvinov++) {
                if (sergey.search(spout[litvinov]) != -1) {
                    $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                    return true;
                }
            }
        });
    });

    let swiperAbout = new Swiper(".swiperAbout", {
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: {
            1212: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
    let banerSwiper = new Swiper(".banerSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".banerSwiper-pagination",
        },
        breakpoints: {
            601: {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    el: ".banerSwiper-pagination",
                },
            },
            1044: {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: ".banerSwiper-pagination",
                },
            },
            1350: {
                slidesPerView: 1000,
                spaceBetween: 30
            }
        }
    });
    let companyesSwiper = new Swiper(".companyesSwiper", {
        loop: true,
        freeMode: true,
        grabCursor: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: true
        },
        speed: 5000,
        freeModeMomentum: false,

        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: ".companyesSwiper-button-next",
            prevEl: ".companyesSwiper-button-prev",
        },
        breakpoints: {
            1350: {
                spaceBetween: 30
            }
        }
    });
    let docsSwiper = new Swiper(".docsSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: ".docsSwiper-button-next",
            prevEl: ".docsSwiper-button-prev",
        },
        breakpoints: {
            400: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            550: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            785: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1044: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1350: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        }
    });
    let aboutSwiper = new Swiper(".aboutSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".aboutSwiper-pagination",
        },
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: ".aboutSwiper-button-next",
            prevEl: ".aboutSwiper-button-prev",
        },
    });
    let licenzSwiper = new Swiper(".licenzSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: ".licenzSwiper-button-next",
            prevEl: ".licenzSwiper-button-prev",
        },
    });

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
        const clearBtnInput = searchDesk.querySelector('.clear-btn');
        const searchDeskInput = searchDesk.querySelector('input');
        const openSearchBtn = document.getElementById('open-btn-search');
        const closeSearchBtn = document.getElementById('close-btn-search');
        let topMenu = document.getElementById('top-menu');

        clearBtnInput.setAttribute("display", "none");

        // Скрипт для бургера
        if (document.querySelector('.burger_menu')) {
            var burgerMenu = document.querySelector('.burger_menu');
            var svgBurger = burgerMenu.querySelectorAll('svg');

            svgBurger.forEach(element => {
                element.addEventListener('click', () => {
                    toggleClass(document.querySelector('.bottom_header_container'), 'open');
                    toggleClass(document.querySelector('body'), 'no-scroll');
                    svgBurger.forEach(el => {

                        toggleClass(el, 'invise');
                    })
                })
            });
        }

        clearBtnInput.addEventListener('click', () => {
            clearBtnInput.setAttribute("display", "none");
            searchDeskInput.value = '';
        })

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

            if (searchDeskInput.value.length > 0) {
                clearBtnInput.setAttribute("display", "block");
            } else {
                clearBtnInput.setAttribute("display", "none");
            }

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


    if (document.querySelector('.popupForm')) {
        var popupForm = document.querySelector('.popupForm');
        var overlay = document.querySelector('.overlay');
        var popupCloseBtn = popupForm.querySelector('.close-btn');
        var popupCheck = document.querySelector('.popupCheck')
        var popupCheckCloseBtn = popupCheck.querySelector('.close-btn');

        popupCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupForm, 'open');
            removeClass(popupCheck, 'open');
        })
        popupCheckCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupForm, 'open');
            removeClass(popupCheck, 'open');
        })
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(el => {
                removeClass(el, 'open');
            })
        })

        if (document.querySelector('.btn_pop')) {
            const btnPopAdd = document.querySelectorAll('.btn_pop')
            var dataNameForForm = '';
            var dataSpecForForm = '';
            btnPopAdd.forEach(element => {
                element.addEventListener('click', () => {
                    addClass(overlay, 'open');
                    addClass(popupForm, 'open');
                    if (element.getAttribute('data-check') == 'doc') {

                        dataNameForForm = element.getAttribute('data-name');
                        dataSpecForForm = element.getAttribute('data-spec');

                    } else {
                        dataNameForForm = '';
                        dataSpecForForm = '';
                    }
                    let dataNameHiddenInp = popupForm.querySelector("[name='data-name']");
                    let dataSpecHiddenInp = popupForm.querySelector("[name='data-spec']");

                    dataNameHiddenInp.value = dataNameForForm.trim();
                    dataSpecHiddenInp.value = dataSpecForForm.trim();
                })
            });
        }

    }

    if (document.querySelector('.form-all')) {
        const formSect = document.querySelectorAll(".form-all");
        const titlePopupCheck = popupCheck.querySelector('h2');
        formSect.forEach(formSect => {


            let form = formSect.querySelector("form");
            let formBtn = formSect.querySelector("[type='submit']");
            let nameInp = formSect.querySelector("[name='name']");
            let phoneInp = formSect.querySelector("[name='phone']");


            window.addEventListener("DOMContentLoaded", function () {
                [].forEach.call(document.querySelectorAll("[name='phone']"), function (input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+7 (___) ___ ____",
                            i = 0,
                            def = matrix.replace(/\D/g, ""),
                            val = this.value.replace(/\D/g, ""),
                            new_value = matrix.replace(/[_\d]/g, function (a) {
                                return i < val.length ? val.charAt(i++) : a
                            });
                        i = new_value.indexOf("_");
                        if (i != -1) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i)
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                            function (a) {
                                return "\\d{1," + a.length + "}"
                            }).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                            this.value = new_value;
                        }
                        if (event.type == "blur" && this.value.length < 5) {
                            this.value = "";
                        }
                    }

                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);

                });
            });



            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    formBtn.disabled = true;
                    return false;
                } else {
                    input.parentNode.classList.remove("err");

                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => {
                    checkInputsValid(input, num);
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            function clearInputs(input) {
                input.value = '';
            }

            function handleTextGood() {
                titlePopupCheck.textContent = 'Спасибо за заявку! Скоро с вами свяжется наш консультант!';
                removeClass(formSect, 'open');
                addClass(overlay, 'open')
                addClass(popupCheck, 'open')
                clearInputs(nameInp);
                clearInputs(phoneInp);
                setTimeout(() => {
                    document.querySelectorAll('.open').forEach(el => {
                        removeClass(el, 'open');
                    })
                }, 3500);
            }

            function handleTextNoGood() {
                titlePopupCheck.textContent = 'Повторите попытку позже';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            function handleTextError() {
                titlePopupCheck.textContent = 'Что-то пошло не так';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(nameInp);
                removeLisInput(phoneInp);

                addLisInput(nameInp, 1);
                addLisInput(phoneInp, 17);

                if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                    // grecaptcha.ready(function () {
                    //     grecaptcha.execute('6Lfk9qspAAAAALXnyJqhAd6kX-ZFapXhfIN0DmQ-', { action: 'submit' }).then(function (token) {
                    //         let formData = new FormData();
                    //         formData.append('name', nameInp.value);
                    //         formData.append('phone', phoneInp.value);
                    //         formData.append('token', token);
                    //         fetch('/local/templates/main/tools/send.php', {
                    //             method: 'POST',
                    //             body: formData,
                    //         })
                    //             .then((res) => {
                    //                 return res.json();
                    //             })
                    //             .then(result => {
                    //                 if (result > 0.5) {
                    //                     handleTextGood();
                    //                 } else {
                    //                     handleTextNoGood();
                    //                 }
                    //             })
                    //             .catch((err) => {
                    //                 handleTextError();
                    //                 console.log(err);
                    //             })
                    //     });
                    // });
                    let formData = new FormData(form);
                    console.log(formData);

                    handleTextGood();
                }
            })
        });
    }

    if (document.querySelector('[data-invise]')) {

        const sectDataInvise = document.querySelectorAll('[data-invise]');
        sectDataInvise.forEach(sect => {
            let btnMore = sect.querySelector('#btn-all-card');
            let dataInvise = sect.getAttribute('data-invise');

            let cards = sect.querySelectorAll('.card');
            let num = 0;

            if (sect.getAttribute('data-invise-desc')) {
                let dataInvisedesc = sect.getAttribute('data-invise-desc');
                if (window.screen.width > 879) {

                    cards.forEach(element => {

                        if (sect.classList.contains('specials_list')) {
                            if (num == 0) {
                                addClass(element, 'v2');
                            } else if (num == dataInvisedesc / 2 - 1) {
                                addClass(element, 'v3');
                            } else if (num == dataInvisedesc / 2) {
                                addClass(element, 'v2');
                            } else if (num == dataInvisedesc - 1) {
                                addClass(element, 'v3');
                            }
                        }

                        if (num > dataInvisedesc - 1) {
                            addClass(element, 'invise_2');
                        }
                        num++;
                    });

                    let num_4 = 7;
                    btnMore.addEventListener('click', () => {

                        if (sect.querySelector('.invise_2')) {
                            let num_2 = 0;
                            cards.forEach(element => {
                                if (element.classList.contains('invise_2')) {
                                    if (num_2 < 6) {
                                        removeClass(element, 'invise_2');
                                        if (!sect.querySelector('.invise_2')) {
                                            addClass(btnMore, 'invise');
                                        }
                                    } else {
                                        if (!sect.querySelector('.invise_2')) {
                                            addClass(btnMore, 'invise');
                                        }
                                    }
                                    num_2++;
                                }
                            });
                        } else {
                            addClass(btnMore, 'invise');
                        }


                        if (sect.classList.contains('specials_list')) {
                            let num_3 = 0;
                            let sectListUl = sect.querySelector('ul');
                            cards.forEach(element => {
                                sectListUl.setAttribute("style", `grid-template-rows: repeat(${num_4}, auto);`);
                                if (num_3 != 0) {
                                    removeClass(element, 'v2');
                                    removeClass(element, 'v3');
                                }

                                if (num_3 == num_4 - 1) {
                                    addClass(element, 'v3');
                                } else if (num_3 == num_4) {
                                    addClass(element, 'v2');
                                } else if (num_3 == num_4 * 2 - 1) {
                                    addClass(element, 'v3');
                                }
                                num_3++;
                            });
                        }

                        num_4 = num_4 + 3;


                    })

                } else {
                    cards.forEach(element => {

                        if (sect.classList.contains('specials_list')) {
                            if (num == 0) {
                                addClass(element, 'v2');
                            } else if (num == dataInvise / 2 - 1) {
                                addClass(element, 'v3');
                            } else if (num == dataInvise / 2) {
                                addClass(element, 'v2');
                            } else if (num == dataInvise - 1) {
                                addClass(element, 'v3');
                            }
                        }

                        if (num > dataInvise - 1) {
                            addClass(element, 'invise_2');
                        }
                        num++;
                    });

                    let num_4 = 7;
                    btnMore.addEventListener('click', () => {

                        if (sect.querySelector('.invise_2')) {
                            let num_2 = 0;
                            cards.forEach(element => {
                                if (element.classList.contains('invise_2')) {
                                    if (num_2 < 6) {
                                        removeClass(element, 'invise_2');
                                        if (!sect.querySelector('.invise_2')) {
                                            addClass(btnMore, 'invise');
                                        }
                                    } else {
                                        if (!sect.querySelector('.invise_2')) {
                                            addClass(btnMore, 'invise');
                                        }
                                    }
                                    num_2++;
                                }
                            });
                        } else {
                            addClass(btnMore, 'invise');
                        }


                        if (sect.classList.contains('specials_list')) {
                            let num_3 = 0;
                            let sectListUl = sect.querySelector('ul');
                            cards.forEach(element => {
                                sectListUl.setAttribute("style", `grid-template-rows: repeat(${num_4}, auto);`);
                                if (num_3 != 0) {
                                    removeClass(element, 'v2');
                                    removeClass(element, 'v3');
                                }

                                if (num_3 == num_4 - 1) {
                                    addClass(element, 'v3');
                                } else if (num_3 == num_4) {
                                    addClass(element, 'v2');
                                } else if (num_3 == num_4 * 2 - 1) {
                                    addClass(element, 'v3');
                                }
                                num_3++;
                            });
                        }

                        num_4 = num_4 + 3;


                    })
                }
            } else {

                cards.forEach(element => {

                    if (sect.classList.contains('specials_list')) {
                        if (num == 0) {
                            addClass(element, 'v2');
                        } else if (num == dataInvise / 2 - 1) {
                            addClass(element, 'v3');
                        } else if (num == dataInvise / 2) {
                            addClass(element, 'v2');
                        } else if (num == dataInvise - 1) {
                            addClass(element, 'v3');
                        }
                    }

                    if (num > dataInvise - 1) {
                        addClass(element, 'invise_2');
                    }
                    num++;
                });

                let num_4 = 7;
                btnMore.addEventListener('click', () => {

                    if (sect.querySelector('.invise_2')) {
                        let num_2 = 0;
                        cards.forEach(element => {
                            if (element.classList.contains('invise_2')) {
                                if (num_2 < 6) {
                                    removeClass(element, 'invise_2');
                                    if (!sect.querySelector('.invise_2')) {
                                        addClass(btnMore, 'invise');
                                    }
                                } else {
                                    if (!sect.querySelector('.invise_2')) {
                                        addClass(btnMore, 'invise');
                                    }
                                }
                                num_2++;
                            }
                        });
                    } else {
                        addClass(btnMore, 'invise');
                    }


                    if (sect.classList.contains('specials_list')) {
                        let num_3 = 0;
                        let sectListUl = sect.querySelector('ul');
                        cards.forEach(element => {
                            sectListUl.setAttribute("style", `grid-template-rows: repeat(${num_4}, auto);`);
                            if (num_3 != 0) {
                                removeClass(element, 'v2');
                                removeClass(element, 'v3');
                            }

                            if (num_3 == num_4 - 1) {
                                addClass(element, 'v3');
                            } else if (num_3 == num_4) {
                                addClass(element, 'v2');
                            } else if (num_3 == num_4 * 2 - 1) {
                                addClass(element, 'v3');
                            }
                            num_3++;
                        });
                    }

                    num_4 = num_4 + 3;


                })

            }


        })


    }

    if (document.querySelector('.menu_list')) {
        const menuList = document.querySelector('.menu_list');
        const menuLi = menuList.querySelectorAll('.menu_first.drop');
        menuLi.forEach(element => {
            element.addEventListener('click', () => {
                toggleClass(element, 'open');
            })
        });


    }

});